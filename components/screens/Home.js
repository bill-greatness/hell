import React from 'react'
import {Container,Text, Left, Right, Header} from 'native-base'
import {ScrollView, View } from 'react-native'
import {_ns} from '../styles'
class Home extends React.Component{

  render(){
    return(
      <ScrollView style={_ns.container}>
          <View style={_ns.headers}>
              <Text>Getting Started</Text>
          </View>
      </ScrollView>
    )
  }
}

export default Home
