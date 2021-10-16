#!/usr/bin/env zsh

set -ex

npx react-native-rename RNReactNavigationTryout

rm -rf node_modules

yarn --dev

yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/stack
yarn add react-native-gesture-handler

yarn android

yarn start --resetCache
