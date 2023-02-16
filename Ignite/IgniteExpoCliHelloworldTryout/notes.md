```bash
export ANDROID_HOME=/home/logic/Android/Sdk
/home/logic/Android/Sdk/emulator

./emulator -list-avds
./emulator @Nexus_9_API_30 -verbose
./emulator @Pixel_5_API_30 -verbose

/home/logic/.android/avd/Pixel_4_API_30.avd/emulator-user.ini

adb devices | grep emulator | cut -f1 | while read line; do adb -s $line emu kill; done
```
