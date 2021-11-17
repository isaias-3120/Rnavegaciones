import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import Contacto1S from '../Screens/Contacto1S';
import Contacto2S from '../Screens/Contacto2S';

const Tab =  createMaterialTopTabNavigator();

export default function TopTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Contacto1S"
            tabBarOptions={{
                activeTintColor:"#8800ea",
                inactiveTintColor:"#f661b2",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Contacto1S"
                component={Contacto1S}
                options={{
                    tabBarLabel:"Contacto 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Contacto2"
                component={Contacto2S}
                options={{
                    tabBarLabel:"Contacto 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            
            />

        </Tab.Navigator>
    )
}