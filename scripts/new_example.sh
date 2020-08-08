#!/usr/bin/env bash

set -ex

find . -mindepth 1 -exec rm -rf -- {} +

expo init .

yarn android

# done