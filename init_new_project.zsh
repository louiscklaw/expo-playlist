#!/usr/bin/env bash

set -ex

APP_DIR=AwesomeProject

rm -rf $APP_DIR || true

expo init $APP_DIR --yes

pushd $APP_DIR
  yarn start
