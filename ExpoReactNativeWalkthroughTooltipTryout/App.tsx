import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

import Tooltip from "react-native-walkthrough-tooltip";

export default function App() {
  let [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Tooltip
        isVisible={visible}
        content={<Text>Check this out!</Text>}
        placement="top"
        onClose={() => {
          setVisible(false);
        }}
      >
        <TouchableHighlight style={styles.touchable}>
          <Text>Press me</Text>
        </TouchableHighlight>
      </Tooltip>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    backgroundColor: "red",
  },
});
