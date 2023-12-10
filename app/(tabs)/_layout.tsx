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
        <Tabs.Screen name="1" options ={{
            headerTitle: "Tasks",
            tabBarLabel: "Tasks",
        }}/>
        <Tabs.Screen name="2" options ={{
            headerTitle: "Schedule",
            tabBarLabel: "Schedule",
        }}/>
    </Tabs>
  )
}