#!/usr/bin/env bash

set -ex

yarn --dev

yarn upgrade expo
yarn upgrade react
yarn upgrade react-native
yarn upgrade react-native-web

yarn build

yarn start
