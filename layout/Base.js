import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Finder, Reports, Forum, Profile} from '../components/screens'
import {Entypo, Ionicons, AntDesign, Fontisto} from '@expo/vector-icons'

class BaseLayout extends React.Component{

  render(){
    const Tabs = createBottomTabNavigator()

    return(
        <Tabs.Navigator initialRouteName='Home'>
            <Tabs.Screen
              name='Home'
               component={Home}
               options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" color={color} size={24} />
                ),
              }}/>

            <Tabs.Screen
              name='Finder'
              component={Finder}
              options={{
               tabBarLabel: 'Finder',
               tabBarIcon: ({ color, size }) => (
                 <AntDesign name="find" color={color} size={24} />
               ),
             }}/>

            <Tabs.Screen
              name='Reports'
              component={Reports}
              options={{
               tabBarLabel: 'Reports',
               tabBarIcon: ({ color, size }) => (
                 <AntDesign name="book" color={color} size={24} />
               ),
             }}
              />

            <Tabs.Screen
              name='Forum'
              component={Forum}
              options={{
               tabBarLabel: 'Forum',
               tabBarIcon: ({ color, size }) => (
                 <Entypo name="chat" color={color} size={24} />
               ),
             }}
              />
            <Tabs.Screen
              name='Profile'
              component={Profile}
              options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color, size }) => (
                 <Fontisto name="person" color={color} size={24} />
               ),
             }}
              />

      

        </Tabs.Navigator>
    )
  }
}

export default BaseLayout
