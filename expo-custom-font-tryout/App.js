import React, {useState} from 'react';
import * as Font from 'expo-font';

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
      <View style={styles.container}>
        <Text style={styles.titleText}>helloworld</Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize:38
  }
});
