#!/usr/bin/env bash

set -ex

yarn --dev

npx expo export:web -c
npx serve web-build
