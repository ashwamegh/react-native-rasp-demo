import * as React from 'react';

import {Platform} from 'react-native';
import {useFreeRasp} from 'freerasp-react-native';
import {APP_TEAM_ID, WATCHER_EMAIL, CERTIFICATE_HASHES} from '@env';

import {DemoApp} from './src/DemoApp';
import {commonChecks, iosChecks, androidChecks} from './src/checks';

const App = () => {
  const [appChecks, setAppChecks] = React.useState([
    ...commonChecks,
    ...(Platform.OS === 'ios' ? iosChecks : androidChecks),
  ]);

  const RaspConfig = {
    androidConfig: {
      packageName: 'com.awesomeproject',
      certificateHashes: [CERTIFICATE_HASHES],
      // supportedAlternativeStores: ['com.sec.android.app.samsungapps'],
    },
    iosConfig: {
      appBundleId: 'com.awesomeproject',
      appTeamId: APP_TEAM_ID,
    },
    watcherMail: WATCHER_EMAIL,
    isProd: true,
  };

  const actions = {
    // Android & iOS
    privilegedAccess: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Privileged Access'
            ? {...threat, status: 'nok'}
            : threat,
        ),
      );
    },
    // Android & iOS
    debug: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Debug' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // Android & iOS
    simulator: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Simulator' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // Android & iOS
    appIntegrity: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'App Integrity' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // Android & iOS
    unofficialStore: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Unofficial Store'
            ? {...threat, status: 'nok'}
            : threat,
        ),
      );
    },
    // Android & iOS
    hooks: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Hooks' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // Android & iOS
    deviceBinding: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Device Binding'
            ? {...threat, status: 'nok'}
            : threat,
        ),
      );
    },
    // Android & iOS
    secureHardwareNotAvailable: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Secure Hardware Not Available'
            ? {...threat, status: 'nok'}
            : threat,
        ),
      );
    },
    // Android & iOS
    systemVPN: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'System VPN' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // Android & iOS
    passcode: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Passcode' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // iOS only
    deviceID: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Device ID' ? {...threat, status: 'nok'} : threat,
        ),
      );
    },
    // Android only
    obfuscationIssues: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Obfuscation Issues'
            ? {...threat, status: 'nok'}
            : threat,
        ),
      );
    },
    // Android only
    devMode: () => {
      setAppChecks(currentState =>
        currentState.map(threat =>
          threat.name === 'Developer Mode'
            ? {...threat, status: 'nok'}
            : threat,
        ),
      );
    },
  };

  useFreeRasp(RaspConfig, actions);

  return <DemoApp checks={appChecks} />;
};

export default App;
