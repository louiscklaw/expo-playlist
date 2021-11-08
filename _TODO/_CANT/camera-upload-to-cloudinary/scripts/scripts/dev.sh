#!/usr/bin/env bash

set -ex

# export RCT_METRO_PORT=8082

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

adb shell am force-stop host.exp.exponent
adb uninstall host.exp.exponent

sleep 1

expo install expo-linking
expo install react-native-screens

(sleep 60 && adb exec-out screencap -p > screen.png && sudo netstat -tulnp |grep -i 19000|awk  -F"/" '{print $1}'|awk '{print $7}' | xargs sudo kill )&

yarn --dev

yarn android


