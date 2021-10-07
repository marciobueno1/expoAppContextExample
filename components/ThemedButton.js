import React, { useContext } from "react";
import { Button } from "react-native";
import { useStoreState, useStoreActions } from "easy-peasy";

export function ThemedButton({ title, onPress }) {
  const themeMode = useStoreState((state) => state.theme.mode);
  const toggle = useStoreActions((state) => state.theme.toggle);
  return (
    <Button title={title} color={themeMode.color} onPress={onPress || toggle} />
  );
}
