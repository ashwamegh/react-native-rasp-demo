/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Box, Flex, HStack, Text, VStack} from '@react-native-material/core';
import CheckmarkCircle from './../assets/checkmark-circle-outline.png';
import CloseCircle from './../assets/close-circle-outline.png';
import Logo from './../assets/logo.png';
import {Image, View} from 'react-native';
import {Colors} from './styles';

export const DemoApp = (props: any) => {
  return (
    <>
      <Flex
        fill
        style={{
          backgroundColor: Colors.background,
          justifyContent: 'center',
        }}>
        <VStack>
          <Image source={Logo} style={{alignSelf: 'center'}} />;
          <View style={{height: 28}} />
          {props.checks.map((check: any, idx: number) => (
            <Box
              key={idx}
              style={{
                borderColor:
                  check.status === 'ok'
                    ? Colors.checkOkDark
                    : Colors.checkNokDark,
                backgroundColor:
                  check.status === 'ok'
                    ? Colors.checkOkLight
                    : Colors.checkNokLight,
                borderWidth: 1,
                paddingHorizontal: 30,
                paddingVertical: 4,
                marginVertical: 8,
                marginHorizontal: 20,
                borderRadius: 15,
              }}>
              <HStack style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: check.status === 'ok' ? 'green' : 'rgb(200, 0, 0)',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  {check.name}
                </Text>
                {check.status === 'ok' ? (
                  <Image
                    source={CheckmarkCircle}
                    style={{
                      tintColor: Colors.checkOkDark,
                      width: 30,
                      height: 30,
                    }}
                  />
                ) : (
                  <Image
                    source={CloseCircle}
                    style={{
                      tintColor: Colors.checkNokDark,
                      width: 30,
                      height: 30,
                    }}
                  />
                )}
              </HStack>
            </Box>
          ))}
        </VStack>
      </Flex>
    </>
  );
};
