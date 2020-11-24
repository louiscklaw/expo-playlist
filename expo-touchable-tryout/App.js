import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';


export default function App() {
  const [name, setName] = useState('hello')
  const [people, setPeople] = useState([
    {name: 'name 110', id: "110"},
    {name: 'name 29', id : "29"},
    {name: 'name 38', id : "38"},
    {name: 'name 47', id : "47"},
    {name: 'name 56', id : "56"},
    {name: 'name 65', id : "65"},
    {name: 'name 74', id : "74"},
    {name: 'name 83', id : "83"},
    {name: 'name 92', id : "92"},
    {name: 'name 101', id: "101"},
    {name: 'name 10', id : "10"},
    {name: 'name 9', id  : "9"},
    {name: 'name 8', id  : "8"},
    {name: 'name 7', id  : "7"},
    {name: 'name 6', id  : "6"},
    {name: 'name 5', id  : "5"},
    {name: 'name 4', id  : "4"},
    {name: 'name 3', id  : "3"},
    {name: 'name 2', id  : "2"},
    {name: 'name 1', id  : "1"},
  ])


  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  // test: {
  //   backgroundColor: "yellow",
  //   padding: 30
  // },
  item: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'gold',
    fontSize: 24
  }
});
