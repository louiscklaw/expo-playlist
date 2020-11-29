import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';

import {AppLoading} from 'expo';

import { StyleSheet, Text, View, Button } from 'react-native';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Home />
    );
  }else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontLoaded(true)}
      />
    )
  }

}
