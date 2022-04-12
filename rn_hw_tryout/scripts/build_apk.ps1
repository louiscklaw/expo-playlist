# keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# xcopy test_apk_key.keystore android\app

cd android
  ./gradlew bundleRelease

# D:\_workspace\expo-playlist\rn_hw_tryout\android\app\build\outputs\bundle\release\app-release.aab
