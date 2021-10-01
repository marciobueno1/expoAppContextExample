import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Toolbar } from './components/Toolbar';
import { ThemeContext, themes } from './ThemeContext';
import { ThemedButton } from './components/ThemedButton';

export default function App() {
  const [theme, setTheme] = useState(themes.dark);
  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <View style={styles.container}>
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
      <ThemedButton title="Fora" onPress={toggleTheme} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
