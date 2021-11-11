#!/usr/bin/env bash

set -ex

APP_DIR=react-native-shared-element-tryout

rm -rf $APP_DIR || true

expo init $APP_DIR --yes

pushd $APP_DIR
  yarn start
