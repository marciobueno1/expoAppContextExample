import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { useQuery } from "react-query";

import { Toolbar } from "./components/Toolbar";
import { ThemedButton } from "./components/ThemedButton";
import { Person } from "./components/Person";

export function Home() {
  const [viewVisible, setViewVisible] = useState(false);
  const handleVisible = () => setViewVisible(!viewVisible);
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/people/"
  );

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(currentPage).then((res) => res.json())
  );

  const handleNextBtPressed = () => {
    console.log("next", data.next);
    setCurrentPage(data.next);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Erro ao carregar os dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Toolbar />
      {viewVisible && <View style={styles.view} />}
      <ThemedButton title="Fora" onPress={handleVisible} />
      <Text>QTD: {data.count}</Text>
      <Button title="Próximo" onPress={handleNextBtPressed} />
      <FlatList
        data={data.results}
        renderItem={({ item }) => <Person person={item} />}
        keyExtractor={(item) => item.name}
        extraData={currentPage}
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
