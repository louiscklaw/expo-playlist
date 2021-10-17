#!/usr/bin/env zsh

set -ex

rm -rf RNStackNavigatorTryout

cp -r RNReactNavigationTryout RNStackNavigatorTryout

pushd RNStackNavigatorTryout
  npx react-native-rename RNStackNavigatorTryout
  ./init.sh
