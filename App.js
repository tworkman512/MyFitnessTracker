import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
// import Tabs from './components/Tabs'
import MainNavigator from './components/MainNavigator'

function FitnessStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
      <View style={{flex: 1}}>
        <FitnessStatusBar backgroundColor={purple} barStyle='light-content' />
        {/* <Tabs /> */}
        <MainNavigator />
      </View>
      </Provider>
    )
  }
}
