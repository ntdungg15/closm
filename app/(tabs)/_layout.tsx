import { Stack } from "expo-router";
import { StateProvider } from "../context/StateContext";

export default function TabsLayout() {
  return (
    <StateProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </StateProvider>
  );
}
