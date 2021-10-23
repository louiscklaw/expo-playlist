#!/usr/bin/zsh

set -ex

# sudo npm uninstall -g react-native-cli || true
# sudo yarn global remove react-native-cli || true

# yarn global remove expo-cli || true
# sudo yarn global remove expo-cli || true

# sudo yarn global add expo-cli

rm -rf $1 || true

# expo init -t blank $1
expo init -t expo-template-blank-typescript $1

# cp scripts/_template/init.sh $1/init.sh

pushd $1
  rm -rf /tmp/metro-* || true

  # code .
  rm -rf .git
  yarn --dev
  # yarn start -c -a
