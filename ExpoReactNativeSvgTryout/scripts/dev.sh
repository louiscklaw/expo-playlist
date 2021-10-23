#!/usr/bin/env bash

set -ex

rm -rf node_modules || true
rm -rf /tmp/metro-* || true

yarn add react-native-svg

yarn --dev

yarn android
