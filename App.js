import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tabscreen from "./screens/tab.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Tabscreen></Tabscreen>
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
});
