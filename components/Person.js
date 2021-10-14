import React from "react";
import { View, Text } from "react-native";

export function Person({ person }) {
  return (
    <View
      style={{
        height: 70,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Nome: {person.name}</Text>
      <Text>Ano Nascimento: {person.birth_year}</Text>
    </View>
  );
}
