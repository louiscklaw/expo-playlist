#!/usr/bin/env bash

set -ex

rm -rf react-native-shared-element-tryout

cp -r expo-tsx-helloworld-tryout  react-native-shared-element-tryout

pushd react-native-shared-element-tryout
  scripts/clear_cache.sh
  scripts/dev.sh
