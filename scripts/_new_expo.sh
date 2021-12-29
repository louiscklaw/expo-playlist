#!/usr/bin/zsh

set -ex

# sudo npm uninstall -g react-native-cli || true
# sudo yarn global remove react-native-cli || true

# yarn global remove expo-cli || true
# sudo yarn global remove expo-cli || true

# sudo yarn global add expo-cli

DST_DIR=ExpoNativeBaseTryout


rm -rf $DST_DIR || true

# expo init -t blank $DST_DIR
expo init -t expo-template-blank-typescript $DST_DIR

mkdir -p $DST_DIR/scripts
cp scripts/_template/init.sh $DST_DIR/scripts/init.sh
cp scripts/_template/dev.sh $DST_DIR/scripts/dev.sh

chmod +x $DST_DIR/scripts/*.sh

pushd $DST_DIR
  rm -rf /tmp/metro-* || true

  # code .
  rm -rf .git
  yarn --dev
  # yarn start -c -a

cd $DST_DIR