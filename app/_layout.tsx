import { Stack } from "expo-router";
import React from "react";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="Camera" options={{ title: 'Camera' }} />
    </Stack>
  );
}