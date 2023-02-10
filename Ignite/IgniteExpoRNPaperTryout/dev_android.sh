#!/usr/bin/env bash

set -ex

export ANDROID_HOME=/home/logic/Android/Sdk
export EXPO_NO_CACHE=true

# rm -rf .expo
# rm -rf node_modules

npm i -D

npm run expo:android -c
