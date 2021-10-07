import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Toolbar } from "./components/Toolbar";
import { ThemeContext, themes } from "./ThemeContext";
import { ThemedButton } from "./components/ThemedButton";

export default function App() {
  const [viewVisible, setViewVisible] = useState(false);
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }, [theme]);

  const [contextValue, setContextValue] = useState({
    theme: theme,
    toggleTheme: toggleTheme,
  });

  useEffect(() => {
    setContextValue({
      theme: theme,
      toggleTheme: toggleTheme,
    });
  }, [toggleTheme]);

  const handleVisible = () => setViewVisible(!viewVisible);

  return (
    <View style={styles.container}>
      <ThemeContext.Provider value={contextValue}>
        <Toolbar />
      </ThemeContext.Provider>
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
