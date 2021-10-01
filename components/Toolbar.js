import { View } from "react-native";
import React from 'react';
import { ThemedButton } from "./ThemedButton";


export function Toolbar() {
    return (
      <View>
        <ThemedButton title="Botão 1"/>
        <ThemedButton title="Botão 2"/>
      </View>
    );
  }