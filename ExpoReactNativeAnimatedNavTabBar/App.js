import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/Feather";

const Tabs = AnimatedTabBarNavigator();

function Home() {
  return <></>;
}

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#2F7C6E",
          inactiveTintColor: "#222222",
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabBarIcon focused={focused} tintColor={color} name="home" />
            ),
          }}
        />
        <Tabs.Screen
          name="Home1"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tintColor={color} name="search" />
            ),
          }}
        />
        <Tabs.Screen
          name="Home2"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tintColor={color} name="image" />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabBarIcon focused={focused} tintColor={color} name="user" />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
