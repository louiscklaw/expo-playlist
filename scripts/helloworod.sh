#!/usr/bin/env bash

set -ex

SCRIPT_FILE=$(realpath $0)
SCRIPT_DIR=$(dirname $SCRIPT_FILE)
PROJ_HOME=$(dirname $SCRIPT_DIR)
echo $SCRIPT_DIR
