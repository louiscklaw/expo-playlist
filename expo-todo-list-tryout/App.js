import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';

import Header from "./components/header";
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

export default function App() {
  const [name, setName] = useState('hello')
  const [todos, setTodos] = useState([
    { text: 'buy coffee',key: '1'},
    { text:'create an app', key: '2'},
    { text: 'play on the switch',key: '3'}
  ])
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) =>(
              <TodoItem item={item}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,

  },
  list :{
    marginTop:20
  }
} );
