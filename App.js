import React from "react";
import { StoreProvider } from "easy-peasy";

import { store } from "./easy-peasy/store";
import { Home } from "./Home";

export default function App() {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
}
