import React from "react";
import { StyleSheet, View } from "react-native";

import { WebView } from "react-native-webview";

const Separator = () => <View style={styles.separator} />;

function App() {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
