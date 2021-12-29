#!/usr/bin/env bash

set -ex

rm -rf ExpoHeadlessJsTryout || true

cp -r ExpoTsxHelloworldTryout  ExpoHeadlessJsTryout

pushd ExpoHeadlessJsTryout
  scripts/clear_cache.sh
  scripts/dev.sh
