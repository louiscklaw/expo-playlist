#!/usr/bin/env bash

sudo netstat -tulnp |grep -i 19000|awk  -F"/" '{print $1}'|awk '{print $7}' | xargs sudo kill || true
sleep 5

./dev.sh

(sleep 180 && adb exec-out screencap -p > screen.png  )&
(sleep 190 && sudo netstat -tulnp |grep -i 19000|awk  -F"/" '{print $1}'|awk '{print $7}' | xargs sudo kill)&

sleep 5

expect test.expect

wait

