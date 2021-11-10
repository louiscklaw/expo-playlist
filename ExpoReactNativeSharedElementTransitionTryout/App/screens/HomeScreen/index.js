import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SimpleLineIcons } from '@expo/vector-icons'
import { SharedElement } from 'react-navigation-shared-element'

import TodayCard from './TodayCard'

import { data } from '../../config/data'

const { width } = Dimensions.get('screen')

const ITEM_WIDTH = width * 0.9
const ITEM_HEIGHT = ITEM_WIDTH * 0.9

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>
      <StatusBar hidden />
      {/* Header */}
      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: '#888', textTransform: 'uppercase' }}>Saturday 9 January</Text>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>Today</Text>
      </View>
      {/* Scrollable content */}
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView indicatorStyle="white" contentContainerStyle={{ alignItems: 'center' }}>
          {data.map((item) => (
            <View key={item.id}>
              <TodayCard item={item} navigation={navigation} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
