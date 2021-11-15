import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeBaseProvider, Box } from 'native-base'

import styles from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
    </View>
  )
}
