import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import Tabs from './components/Tabs'

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
      <View style={{flex: 1}}>
        <View style={{height: 20}} />
        <Tabs />
      </View>
      </Provider>
    )
  }
}
