#!/usr/bin/env zsh

set -ex

DIR=AuthenticationFlows

rm -rf UsingTheCurrentThemeInYourOwnComponents || true

cp -r UsingTheOperatingSystemPreferencesTryout UsingTheCurrentThemeInYourOwnComponents

pushd UsingTheCurrentThemeInYourOwnComponents
  npx react-native-rename UsingTheCurrentThemeInYourOwnComponents
  ./init.sh
