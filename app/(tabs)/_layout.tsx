import React from 'react'
import { Tabs } from 'expo-router'
export default function _layout() {
  return (
    <Tabs
    screenOptions={{
        headerStyle:{
            backgroundColor: 'black'
        },
        headerTintColor: 'white'
    }}>
        <Tabs.Screen name="home" options ={{
            headerTitle: "Home",
            tabBarLabel: "Home",
        }}/>
    </Tabs>
  )
}