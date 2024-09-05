package com.awesomeproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.securevale.rasp.android.api.SecureAppChecker;
import com.securevale.rasp.android.api.result.Result;

public class RASPModule extends ReactContextBaseJavaModule {
    public RASPModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RASPModule";
    }

    @ReactMethod
    public void checkSecurity(Promise promise) {
        SecureAppChecker.Builder builder = new SecureAppChecker.Builder(
                getReactApplicationContext(),
                false, // checkEmulator
                false, // checkDebugger
                true  // checkRoot
        );

        SecureAppChecker check = builder.build();
        Result checkResult = check.check();

        if (checkResult instanceof Result.EmulatorFound) {
            promise.resolve("EmulatorFound");
        } else if (checkResult instanceof Result.DebuggerEnabled) {
            promise.resolve("DebuggerEnabled");
        } else if (checkResult instanceof Result.Rooted) {
            promise.resolve("Rooted");
        } else if (checkResult instanceof Result.Secure) {
            promise.resolve("Secure");
        } else {
            promise.reject("ERROR", "Unknown result");
        }
    }
}