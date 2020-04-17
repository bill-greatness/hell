import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler';
import {BaseLayout} from './layout'

export default function App() {
  return (
    <NavigationContainer>
      <BaseLayout />
    </NavigationContainer>
  );
}
