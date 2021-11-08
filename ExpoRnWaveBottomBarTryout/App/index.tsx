/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { BottomFabBar } from "rn-wave-bottom-bar";
import { SettingsScreen } from "./ListScreen";

const generateScreen = (screen: string) => () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>{screen}!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (name: string) =>
  ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) =>
    <Icon name={name} size={28} color={focused ? "white" : "white"} />;

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#5F0B65",
            tabBarActiveBackgroundColor: "#5F0B65",
            tabBarInactiveBackgroundColor: "red",
          }}
          tabBar={(props) => (
            <BottomFabBar
              // Add Shadow for active tab bar button
              focusedButtonStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }}
              // - You can add the style below to show content screen under the tab-bar
              // - It will makes the "transparent tab bar" effect.
              bottomBarContainerStyle={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
              }}
              {...props}
            />
          )}
        >
          <Tab.Screen
            options={{
              tabBarIcon: tabBarIcon("aliwangwang-o1"),
            }}
            name="Home"
            component={generateScreen("Home")}
          />
          <Tab.Screen
            name="Meh"
            options={{ tabBarIcon: tabBarIcon("meh") }}
            component={generateScreen("Meh")}
          />
          <Tab.Screen
            options={{
              tabBarIcon: tabBarIcon("rocket1"),
              tabBarActiveBackgroundColor: "#45014A",
              tabBarActiveTintColor: "purple",
            }}
            name="Settings"
            component={SettingsScreen}
          />
          <Tab.Screen
            options={{ tabBarIcon: tabBarIcon("Trophy") }}
            name="Trophy"
            component={generateScreen("Trophy")}
          />
          <Tab.Screen
            options={{ tabBarIcon: tabBarIcon("wallet") }}
            name="Wallet"
            component={generateScreen("Wallet")}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;