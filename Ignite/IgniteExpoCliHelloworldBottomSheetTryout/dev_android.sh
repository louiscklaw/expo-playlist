#!/usr/bin/env bash

set -ex

export ANDROID_HOME=/home/logic/Android/Sdk

rm -rf .expo
rm -rf node_modules

yarn --dev

yarn expo:android -c
