#!/usr/bin/env bash

set -ex

yarn
expo update 37
# https://docs.expo.io/workflow/upgrading-expo-sdk-walkthrough/
# yarn upgrade expo
# yarn upgrade react
# yarn upgrade react-native
# yarn upgrade react-native-web

yarn start
