#!/usr/bin/env bash

set -ex


rm -rf node_modules &

yarn cache clean
npm cache clean --force

# watchman watch-del-all

rm -fr $TMPDIR/metro-cache || true
rm -rf $TMPDIR/haste-map-* || true

expo start --clear


wait