#!/usr/bin/env bash

# set -ex

DIR_LIST=`find .  -maxdepth 1 -type d |grep -v .git |grep -v _CANT |grep -v '\.$'|grep -v firebase |sort`

EXPO_DIR_LIST=("./reactnav5-stack-navigator" "./redux-persist-asyncstorage" "./redux-shopping-cart" "./redux-shopping-cart" "./reduxTodoApp" "./reduxTodoApp" "./remove-tabbar-border" "./remove-tabbar-border" "./rnApolloCryptoListDemo" "./rnStyledComponents" "./safe-area-insets-example" "./wavySVGExample")
# DIR_LIST='./rnSplashAndIconExample'
# EXPO_DIR_LIST=("first" "second" "third item" "fourth")



# for i in $DIR_LIST ; do rm -rf $i/scripts && cp -r /home/logic/_workspace/expo-playlist/_TODO/react-native-examples/_DONE/customStatusBarHook/scripts/ $i/scripts ; done

for i in "${EXPO_DIR_LIST[@]}"; do

  echo 'inspecting' $i
  cp -r /home/logic/_workspace/expo-playlist/_TODO/react-native-examples/_DONE/customStatusBarHook/scripts/dev.sh $i/scripts/dev.sh
  cp -r /home/logic/_workspace/expo-playlist/_TODO/react-native-examples/_DONE/customStatusBarHook/scripts/run.sh $i/scripts/run.sh
  cp -r /home/logic/_workspace/expo-playlist/_TODO/react-native-examples/_DONE/customStatusBarHook/scripts/test.expect $i/scripts/test.expect
  pushd $i/scripts
    chmod +x *.sh
    ./run.sh || true
  popd
done
