#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

# yarn add expo
# yarn add react react-dom
# yarn add react-native react-native-web

# yarn add --dev @babel/core @types/react @types/react-native typescript

# sudo yarn global remove expo-cli || true
# sudo yarn global add expo-cli

# yarn add react-navigation
# yarn add react-native-animatable
# yarn add react-navigation-fluid-transitions
# yarn add react-native-gesture-handler
# yarn add react-navigation-stack
# yarn add react-native-screens

yarn --dev

yarn start -c
