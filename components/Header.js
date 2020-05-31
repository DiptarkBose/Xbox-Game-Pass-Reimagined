import React, { Component } from 'react'
import {View, ScrollView, Text } from 'react-native'
import { Thumbnail, H3 } from 'native-base'
import ToggleSwitch from 'toggle-switch-react-native'

export default class Header extends Component {

  render () {
    return (
      <View style={{backgroundColor: "#232120", height: 75}}>
        <View style={{flex:1, marginTop: 30, flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <Thumbnail style={{height: 30, width: 30}}  source={require('../assets/pro.jpg')} />
          <View style={{flex:1, marginLeft: 10}}>
            <Text style={{color:"#FFFFFF", fontSize: 12}}>Hello</Text>
            <Text style={{color:"#FFFFFF", fontSize: 12}}>DiptarkBose321!</Text>
          </View>
          

        </View>
      </View>
    )
  }
}
