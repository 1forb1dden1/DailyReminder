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
            headerTitle: "Daily Tasks",
            tabBarLabel: "Daily Tasks",
        }}/>
        <Tabs.Screen name="2" options ={{
            headerTitle: "Schedule",
            tabBarLabel: "Schedule",
        }}/>
        <Tabs.Screen name="3" options ={{
            headerTitle: "Edit Tasks",
            tabBarLabel: "Edit Tasks",
        }}/>
    </Tabs>
  )
}