import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('hello')

  const clickHandler = () => {
    setName('world')
  }

  const clickClear = () => {
    setName('hello')
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='clear' onPress={clickClear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: "yellow",
    padding: 30
  }
});
