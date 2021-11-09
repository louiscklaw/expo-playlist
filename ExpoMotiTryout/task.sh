#!/usr/bin/env bash

set -ex

# cp -r helloworld-tryout AnimatePresenceTryout &
# cp -r helloworld-tryout AnimateHeightTryout &
# cp -r helloworld-tryout ExitBeforeEnterTryout &
# cp -r helloworld-tryout LoopAnimationTryout &
# cp -r helloworld-tryout VariantsTryout &
# cp -r helloworld-tryout HoverDropdownTryout &

pushd AnimatePresenceTryout 
  npx react-native-rename AnimatePresenceTryout &
popd
pushd AnimateHeightTryout 
  npx react-native-rename AnimateHeightTryout &
popd
pushd ExitBeforeEnterTryout 
  npx react-native-rename ExitBeforeEnterTryout &
popd
pushd LoopAnimationTryout 
  npx react-native-rename LoopAnimationTryout &
popd
pushd VariantsTryout 
  npx react-native-rename VariantsTryout &
popd
pushd HoverDropdownTryout 
  npx react-native-rename HoverDropdownTryout &
popd

wait 