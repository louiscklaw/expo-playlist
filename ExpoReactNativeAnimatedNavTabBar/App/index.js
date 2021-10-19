import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

import { Screen1, Screen2, Screen3 } from "./screens/Screen1";

const Tabs = AnimatedTabBarNavigator();

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Logo = () => (
  <Image
    source={require("./logo.png")}
    resizeMode={"cover"}
    style={{ width: 150, height: 150 }}
  />
);

const Home = (props) => (
  <Screen>
    <Screen1 />
    <Text>Home</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate("Discover")}>
      <Text>Go to Discover</Text>
    </TouchableOpacity>
  </Screen>
);

const Discover = (props) => (
  <Screen>
    <Screen2 />
    <Text>Discover</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
      <Text>Go to Home</Text>
    </TouchableOpacity>
  </Screen>
);

const Images = () => (
  <Screen>
    <Screen3 />
    <Text>Images</Text>
  </Screen>
);

const Profile = () => (
  <Screen>
    <Logo />
    <Text>Profile</Text>
  </Screen>
);

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.focused ? "#fff" : "#222222"}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#222222",
          activeBackgroundColor: "#800000",
        }}
      >
        <Tabs.Screen
          name="メニュー"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabBarIcon focused={focused} tintColor={color} name="home" />
            ),
          }}
        />
        <Tabs.Screen
          name="注文履歴"
          component={Discover}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tintColor={color} name="search" />
            ),
          }}
        />
        <Tabs.Screen
          name="注文リスト"
          component={Images}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tintColor={color} name="image" />
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
