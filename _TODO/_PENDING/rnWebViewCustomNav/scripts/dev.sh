#!/usr/bin/env bash

set -ex

# export RCT_METRO_PORT=8082

# rm -rf node_modules || true
rm -rf /tmp/metro-* || true

yarn --dev

yarn android
