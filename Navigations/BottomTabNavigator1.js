import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import GithubScreen from '../Screens/GithubScreen';
import ProgramarScreen from '../Navigations/StackNavigation1';
import TopTabNavigator1 from './TopTabNavigator1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ee771c",
                inactiveTintColor:"#ffcd06",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Github"
                component={GithubScreen}
                options={{
                    tabBarLabel:"Github",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Programar"
                component={ProgramarScreen}
                options={{
                    tabBarLabel:"Programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-react"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Contacto"
                component={TopTabNavigator1}
                options={{
                    tabBarLabel:"Contacto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}