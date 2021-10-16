#!/usr/bin/env bash

set -ex

rm -rf TestingWithJestTryout || true

cp -r RNReanimated2HelloworldTryout TestingWithJestTryout
# cp -r RNReanimated2HelloworldTryout TestingWithJestTryout

pushd TestingWithJestTryout
  npx react-native-rename TestingWithJestTryout
