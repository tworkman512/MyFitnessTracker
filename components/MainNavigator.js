import React from 'react'
import { View, Platform } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { purple, white } from '../utils/colors'
import EntryDetail from './EntryDetail'
import Tabs from './Tabs'

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

export default createAppContainer(MainNavigator)
