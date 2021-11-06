#!/usr/bin/env bash

set -ex


yarn --dev

yarn add react-native-step-indicator
yarn add react-native-swiper

yarn android
