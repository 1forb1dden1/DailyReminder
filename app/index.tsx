import {View, Text, Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Page(){
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar style ="light"/>
            <Text>Home Page</Text>
            <Link href="/login/" asChild>
                <Button title="Open Login Page"/>
            </Link>
        </View>
    )
}