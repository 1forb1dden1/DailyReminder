import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

//Header for the files 
export default function _layout() {
  return (
    <Stack
    screenOptions={{
        headerStyle:{
            backgroundColor: 'black'
        },
        headerTintColor: 'white'
    }}>
        <Stack.Screen name = "index" options = {{
            title: 'Home'
        }} />
        <Stack.Screen name = "login/index" options = {{
            title: 'Login/Register'
        }} />
    </Stack>
  )
}