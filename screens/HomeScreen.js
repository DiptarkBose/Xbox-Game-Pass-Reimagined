import React, { Component } from 'react'
import { ActivityIndicator, View, ScrollView } from 'react-native'
import { Container, CardItem, Card, Content, Left, Body, Text, Image, Button, Icon, Right, List, ListItem, Footer, FooterTab } from 'native-base'
import * as Font from 'expo-font'
import { Actions } from "react-native-router-flux";

import Header from '../components/Header'
export default class HomeScreen extends Component {

  state = {
    isReady: false
  }

  componentWillMount = async() => {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }

  render () {
    if (!this.state.isReady) {
      return <ActivityIndicator />
    }
    return (
      <View style={{flex: 1}}>
        <Header/>
      </View>
    )
  }
}
