#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

# yarn --dev
# yarn add react-native-dots-pagination

yarn android
