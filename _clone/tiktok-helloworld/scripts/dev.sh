#!/usr/bin/env bash

set -ex

rm -rf /tmp/metro-* || true

# yarn --dev
# yarn add expo

expo install @expo/vector-icons &
expo install @react-native-community/viewpager &
expo install expo-av &
expo install expo-camera &
expo install expo-linear-gradient &
expo install lottie-react-native &
expo install react-native-gesture-handler &
expo install react-native-reanimated &
expo install react-native-safe-area-context &
expo install react-native-screens &

wait

# yarn add react-native@0.64.2

yarn android
