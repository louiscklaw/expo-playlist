#!/usr/bin/env zsh

set -ex

rm -rf ReactNativeHelloworld_tryout

react-native init ReactNativeHelloworld_tryout

pushd ReactNativeHelloworld_tryout
  # NOTES: start 'react-native start' before run-android
  # react-native start

  react-native run-android

popd
