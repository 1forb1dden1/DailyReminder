import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
        screenOptions={{
            headerStyle:{
                backgroundColor: 'black'
            },
            headerTintColor: 'white'
        }}>
        <Stack.Screen name = "(tabs)" options = {{
            headerShown: false,
        }} />
        <Stack.Screen name = "index" options = {{
            title: 'Login/Register'
        }} />
    </Stack>
  )
}