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
        <Stack.Screen name = "home/index" options = {{
            title: 'Home'
        }} />
        <Stack.Screen name = "list/index" options = {{
            title: 'Daily List'
        }} />
        <Stack.Screen name = "index" options = {{
            title: 'Login/Register'
        }} />
    </Stack>
  )
}