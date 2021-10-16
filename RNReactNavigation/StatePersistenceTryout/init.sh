#!/usr/bin/env zsh

set -ex

# rm -rf node_modules
rm -rf /tmp/metro-* || true

yarn --dev

yarn add @react-navigation/bottom-tabs
yarn add @react-native-async-storage/async-storage
# yarn add @react-navigation/stack
# yarn add react-native-gesture-handler

# yarn android

yarn start --resetCache

# npx react-native-rename UsingTheOperatingSystemPreferencesTryout