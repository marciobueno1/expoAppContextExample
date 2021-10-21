import React from "react";
import { StoreProvider } from "easy-peasy";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "./easy-peasy/store";
import { HomeScreen } from "./screens/HomeScreen";
import { PeopleScreen } from "./screens/PeopleScreen";

// Create a client
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Overview" }}
            />
            <Stack.Screen name="People" component={PeopleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </QueryClientProvider>
  );
}
