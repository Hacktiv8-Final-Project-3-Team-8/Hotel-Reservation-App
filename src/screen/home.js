import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native'
import { History } from './history'
import { HomePage } from './homepage'
import { Profile } from './profile'
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export const Home = () => {
    // const Tab = createBottomTabNavigator
  return (
    // <View>

    //     <Text>Kamu</Text>
    //     <Tab.Navigator>
    //         <Tab.Screen name='homepage' component={HomePage}></Tab.Screen>
    //     </Tab.Navigator>
    // </View>
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'homepage') {
            iconName = 'home'
          } 
          else if (route.name === 'history') {
            iconName = 'archive'
          }
          else if (route.name === 'profile') {
            iconName = 'user'
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#121212',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel:false,
        tabBarStyle:{backgroundColor:'#FEE402',height:60}
      })}
    >
        <Tab.Screen name='homepage' component={HomePage} options={{headerShown:false}}></Tab.Screen>
        <Tab.Screen name='history' component={History} options={{headerTitleAlign:'center',headerTitle:'History',headerShadowVisible:false}}></Tab.Screen>
        <Tab.Screen name='profile' component={Profile} options={{headerTitleAlign:'center',headerTitle:'Profile',headerShadowVisible:false}}></Tab.Screen>
    </Tab.Navigator>
  )
}
