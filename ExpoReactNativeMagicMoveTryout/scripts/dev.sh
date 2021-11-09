#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

# sudo netstat -tulnp |grep -i 19000|awk  -F"/" '{print }'|awk '{print }' | xargs sudo kill || true

adb shell am force-stop host.exp.exponent || true
sleep 1
adb shell pm uninstall host.exp.exponent || true
sleep 5

# expo install expo-linking
# sleep 1

# expo install react-native-screens
# sleep 3

yarn add react-native-magic-move react-navigation-magic-move

yarn --dev

yarn android
