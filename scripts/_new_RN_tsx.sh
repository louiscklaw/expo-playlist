#!/usr/bin/env bash
set -ex

APP_DIR=RNSharedElementTryout


# pushd /tmp

  rm -rf $APP_DIR

  sudo npm uninstall -g react-native-cli || true
  sudo yarn global remove react-native-cli || true

  yarn global remove expo-cli || true
  sudo yarn global remove expo-cli || true

  yarn global add @react-native-community/cli

  npx react-native init $APP_DIR --template react-native-template-typescript
  # npx react-native init MyApp --template @thecodingmachine/react-native-boilerplate

  # # for vanilla React Native
  # npx ignite-cli new $APP_DIR
  # # or for Expo-powered:
  # npx ignite-cli new $APP_DIR --expo
  # # to provide a custom bundle identifier (Android only):
  # npx ignite-cli new PizzaApp --bundle=com.infinitered.pizzaapp

  # pushd /tmp/$APP_DIR
  #   yarn start &
  #   yarn android
  # popd
# popd
