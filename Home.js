import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Toolbar } from "./components/Toolbar";
import { ThemedButton } from "./components/ThemedButton";

export function Home() {
  const [viewVisible, setViewVisible] = useState(false);
  const handleVisible = () => setViewVisible(!viewVisible);

  return (
    <View style={styles.container}>
      <Toolbar />
      {viewVisible && <View style={styles.view} />}
      <ThemedButton title="Fora" onPress={handleVisible} />
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
  view: {
    width: 150,
    height: 70,
    backgroundColor: "green",
  },
});
