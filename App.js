import React from "react";
import { StoreProvider } from "easy-peasy";
import { QueryClient, QueryClientProvider } from "react-query";

import { store } from "./easy-peasy/store";
import { Home } from "./Home";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <Home />
      </StoreProvider>
    </QueryClientProvider>
  );
}
