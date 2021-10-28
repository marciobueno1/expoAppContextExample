import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";

import { Toolbar } from "../components/Toolbar";
import { ThemedButton } from "../components/ThemedButton";
import { routes } from "../navigation";

export function HomeScreen({ navigation }) {
  const [viewVisible, setViewVisible] = useState(false);
  const handleVisible = () => setViewVisible(!viewVisible);

  return (
    <View style={styles.container}>
      <Toolbar />
      {viewVisible && <View style={styles.view} />}
      <ThemedButton title="Fora" onPress={handleVisible} />
      <Button
        title="Go to Star Wars People"
        onPress={() => navigation.navigate(routes.People)}
      />
      <Button
        title="Home Screen Again..."
        onPress={() => navigation.push(routes.Home)}
      />
      <Button title="Go Back..." onPress={() => navigation.goBack()} />
      <Button
        title="Go Back to first screen..."
        onPress={() => navigation.popToTop()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  view: {
    width: 150,
    height: 70,
    backgroundColor: "green",
  },
});
