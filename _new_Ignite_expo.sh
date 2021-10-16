#!/usr/bin/env bash
set -ex

APP_DIR=IgniteExpoCliHelloworldTryout


# pushd /tmp
  rm -rf $APP_DIR

  yarn global remove react-native-cli || true
  sudo yarn global remove react-native-cli || true

  yarn global remove expo-cli || true
  sudo yarn global remove expo-cli || true


  # npx react-native init $APP_DIR --template react-native-template-typescript
  # npx react-native init MyApp --template @thecodingmachine/react-native-boilerplate


  # # for vanilla React Native
  # npx ignite-cli new $APP_DIR
  # # or for Expo-powered:
  npx ignite-cli new $APP_DIR --expo
  # # to provide a custom bundle identifier (Android only):
  # npx ignite-cli new PizzaApp --bundle=com.infinitered.pizzaapp
