#!/usr/bin/env bash

set -ex

# export RCT_METRO_PORT=8082

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

# sudo netstat -tulnp |grep -i 19000|awk  -F"/" '{print $1}'|awk '{print $7}' | xargs sudo kill || true

adb shell am force-stop host.exp.exponent || true
sleep 5

adb shell pm uninstall host.exp.exponent || true
sleep 5

# expo install expo-linking
# sleep 1

# expo install react-native-screens
# sleep 3
