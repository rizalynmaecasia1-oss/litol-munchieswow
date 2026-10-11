import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e88acb",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Litol Munchies",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="menu"
        options={{
          title: "Our Menu",
        }}
      />

      <Stack.Screen
        name="product/[id]"
        options={{
          title: "Donut Details",
        }}
      />

      <Stack.Screen
        name="contact"
        options={{
          title: "Contact Us",
        }}
      />
    </Stack>
  );
}