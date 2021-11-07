#!/usr/bin/env bash

set -ex

rm -rf tiktok-clone

git clone --depth=3 https://github.com/matheuscastroweb/tiktok-clone

pushd tiktok-clone
  yarn --dev
  yarn android

