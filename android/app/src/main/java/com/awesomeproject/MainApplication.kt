package com.awesomeproject

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.securevale.rasp.android.native.SecureApp;

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost = object : DefaultReactNativeHost(this) {
        override fun getUseDeveloperSupport() = BuildConfig.DEBUG

        override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages.toMutableList()
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // packages.add(RazorpayPackage())
            packages.add(RASPPackage())
            return packages
        }

        override fun getJSMainModuleName() = "index"

        override val isNewArchEnabled: Boolean
        get() = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED

        fun isHermesEnabled() = BuildConfig.IS_HERMES_ENABLED
    }

    override fun getReactNativeHost(): ReactNativeHost = mReactNativeHost

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            DefaultNewArchitectureEntryPoint.load()
        }
        SecureApp.init()
        ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
    }
}