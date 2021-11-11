import React from "react";
import { Button, Image, View } from "react-native";
import { StoreProvider } from "easy-peasy";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "./easy-peasy";
import { HomeScreen } from "./screens/HomeScreen";
import { PeopleScreen } from "./screens/PeopleScreen";
import { routes } from "./navigation";

// Create a client
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 32, backgroundColor: 'yellow' }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name={routes.Home}
              component={HomeScreen}
              options={({ route }) => ({
                headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="black"
                  />
                ),
              })}
            />
            <Stack.Screen name={routes.People} component={PeopleScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </QueryClientProvider>
  );
}
