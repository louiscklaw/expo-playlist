#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

yarn --dev

# yarn add expo
# yarn add react
# yarn add react-dom
# yarn add react-native
# yarn add react-native-web

expo install expo-status-bar
expo install expo-print
expo install expo-sharing

yarn android
