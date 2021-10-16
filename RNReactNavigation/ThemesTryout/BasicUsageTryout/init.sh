#!/usr/bin/env zsh

set -ex


rm -rf node_modules
rm -rf /tmp/metro-*

yarn --dev

yarn add @react-navigation/bottom-tabs
# yarn add @react-navigation/drawer
# yarn add @react-navigation/stack
# yarn add react-native-appearance
# yarn add react-native-gesture-handler
# yarn add react-native-reanimated

yarn android

yarn start --resetCache
