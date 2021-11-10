#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

# sudo netstat -tulnp |grep -i 19000|awk  -F"/" '{print }'|awk '{print }' | xargs sudo kill || true

adb shell am force-stop host.exp.exponent || true
sleep 1

adb shell pm uninstall host.exp.exponent || true
sleep 1

expo install react react-dom
expo install react-native react-native-web
expo install expo-status-bar
expo install @react-native-masked-view/masked-view

yarn --dev

yarn android
