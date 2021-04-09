import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

  TabBarIOS

} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HelloworldIcon(){
  return (

    <View>
      <Text>https://github.com/oblador/react-native-vector-icons</Text>
      <IconFA name='area-chart' size={30}/>
      <Text >FontAwesome tryout</Text>

      <IconIon name="person" size={30} color="#4F8EF7" />
      <Text >person</Text>

      <Ionicons name="ios-arrow-forward-outline" size={30} color="#4F8EF7" />
      <Text >arrow-forward-outline</Text>

      <Ionicons name="alert-circle" size={30} color="#4F8EF7" />
      <Text >alert-circle</Text>


    </View>

  )
}

export default HelloworldIcon