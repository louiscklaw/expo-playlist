#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

adb shell am force-stop host.exp.exponent || true
sleep 1
adb shell pm uninstall host.exp.exponent || true
sleep 1

expo install react-native-shared-element

yarn

yarn android
