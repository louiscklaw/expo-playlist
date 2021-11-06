#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

# yarn --dev

yarn add d3-shape
yarn add react-native-curved-bottom-bar
yarn add react-native-svg react-native-pager-view

yarn android
