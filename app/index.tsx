import React from 'react'
import LoginScreen from '../app/login/index'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export default function Root(){
    return (
        <LoginScreen/>
    )
}