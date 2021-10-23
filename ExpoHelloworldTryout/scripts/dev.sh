#!/usr/bin/env bash

set -ex

sudo yarn global remove expo-cli || true
sudo yarn global add expo-cli

rm -rf /tmp/metro-* || true

# yarn add react-navigation
# yarn add react-native-animatable
# yarn add react-navigation-fluid-transitions
# yarn add react-native-gesture-handler
# yarn add react-navigation-stack
# yarn add react-native-screens

yarn --dev
yarn android -c
