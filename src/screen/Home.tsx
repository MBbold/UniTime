import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
export const HomeScreen =()=>{
    return(
        <SafeAreaView>
            <Text>Hello</Text>
            <Ionicons name="add" style={{color :"red", fontSize:50}}/>
        </SafeAreaView>
    )
}