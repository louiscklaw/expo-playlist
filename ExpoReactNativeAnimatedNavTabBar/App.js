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
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Home1"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
                color={color}
              />
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
