import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Input, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}


class App extends Component {
  state = {
    username: "",
    password: "",
    token: ""
  }

  constructor( props ) {
    super( props )
    this.getData()
  }

  onSubmit = async () => {
    try {
      this.setState( { token: 'abc123' } )
      await AsyncStorage.setItem('token','abc123')
    } catch (err) {
      console.log(err)
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null){
        this.setState({token: value})
      }
    } catch (e) {
      console.log(e)
    }
  }

  clearToken = async() =>{
    try {
      this.setState({token: null})
      await AsyncStorage.removeItem('token')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
        return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>React Native AsyncStorage tryout</Text>
        <Text>{this.state.token}</Text>

        <Button
          title="hello button"
          onPress={this.onSubmit}
          />

        <Button
          title="Logoff"
          onPress={this.clearToken}
          />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App