import React, { useEffect, useState } from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';
  import * as firebase from '../firebase/firebase'
import { NotificationListner, requestUserPermission } from '../utils/notification_helper';
export const HomeScreen =()=>{
    const [data, setData] =useState([{name:"Hello local text"}])
    useEffect(()=>{
        (async()=>{
            const _dataValue = await firebase.firestore().collection('users').get();
            const temp: any[] = [];
            _dataValue.forEach(item=>{
                temp.push({id:item.id, ...item.data()})
            })
            setData(temp)
        })()
        NotificationListner();
        requestUserPermission();
    },[])
    return(
        <SafeAreaView>
            <Text>{data[0].name}</Text>
            <Ionicons name="add" style={{color :"red", fontSize:50}}/>
            <TouchableOpacity style={{margin:20 ,padding:10, backgroundColor:'orange',alignItems:'center'}}>
                <Text>Notification</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}