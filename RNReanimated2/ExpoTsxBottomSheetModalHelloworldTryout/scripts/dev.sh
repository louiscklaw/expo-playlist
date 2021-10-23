#!/usr/bin/env bash

set -ex

rm -rf node_modules || true
rm -rf /tmp/metro-* || true

yarn add react-native-reanimated
yarn add @gorhom/bottom-sheet@^4
yarn add react-native-gesture-handler

yarn --dev

yarn android
