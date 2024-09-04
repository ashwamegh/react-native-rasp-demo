/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useFreeRasp} from 'freerasp-react-native';
import {APP_TEAM_ID, WATCHER_EMAIL, CERTIFICATE_HASHES} from '@env';

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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [isInsecure, setIsInsecure] = useState();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // reactions for detected threats
  const actions = {
    // Android & iOS
    privilegedAccess: () => {
      console.log('privilegedAccess');
    },
    // Android & iOS
    debug: () => {
      console.log('debug');
    },
    // Android & iOS
    simulator: () => {
      console.log('simulator');
    },
    // Android & iOS
    appIntegrity: () => {
      console.log('appIntegrity');
    },
    // Android & iOS
    unofficialStore: () => {
      console.log('unofficialStore');
    },
    // Android & iOS
    hooks: () => {
      console.log('hooks');
    },
    // Android & iOS
    deviceBinding: () => {
      console.log('deviceBinding');
    },
    // Android & iOS
    secureHardwareNotAvailable: () => {
      console.log('secureHardwareNotAvailable');
    },
    // Android & iOS
    systemVPN: () => {
      console.log('systemVPN');
    },
    // Android & iOS
    passcode: () => {
      console.log('passcode');
    },
    // iOS only
    deviceID: () => {
      console.log('deviceID');
    },
    // Android only
    obfuscationIssues: () => {
      console.log('obfuscationIssues');
    },
    // Android only
    devMode: () => {
      console.log('devMode');
    },
  };

  useFreeRasp(RaspConfig, actions);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
