#!/usr/bin/env zsh

set -ex


rm -rf node_modules || true
rm -rf /tmp/metro-* || true

yarn --dev

yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/stack
yarn add react-native-gesture-handler

yarn android

yarn start --resetCache
