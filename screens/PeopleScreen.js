import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { useQuery } from "react-query";

import { Person } from "../components/Person";

export function PeopleScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/people/?page=1"
  );

  const { isLoading, error, data } = useQuery(currentPage, () =>
    fetch(currentPage).then((res) => res.json())
  );

  const handleNextBtPressed = () => {
    if (data.next) {
      setCurrentPage(data.next);
      navigation.setOptions({ title: `People - pg ${data.next.substring(data.next.indexOf('=') + 1)}`})
    }
  };

  const handlePreviousBtPressed = () => {
    if (data.previous) {
      setCurrentPage(data.previous);
      navigation.setOptions({ title: `People - pg ${data.previous.substring(data.previous.indexOf('=') + 1)}`})
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error || data?.detail === "Not found") {
    return (
      <View style={styles.container}>
        <Text>Erro ao carregar os dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>QTD: {data?.count}</Text>
      <View style={styles.botoes}>
        <Button title="Anterior" onPress={handlePreviousBtPressed} />
        <Button title="Próximo" onPress={handleNextBtPressed} />
      </View>
      {error || data?.detail === "Not found" ? (
        <Text>Erro ao carregar os dados...</Text>
      ) : (
        <FlatList
          data={data.results}
          renderItem={({ item }) => <Person person={item} />}
          keyExtractor={(item) => item.name}
          extraData={currentPage}
        />
      )}

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
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
  },
});
