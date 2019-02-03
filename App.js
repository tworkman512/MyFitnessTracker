import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AddEntry from './components/AddEntry'
import History from './components/History'

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
      <View style={{flex: 1}}>
        {/* <AddEntry /> */}
        <View style={{height: 20}} />
        <History />
      </View>
      </Provider>
    )
  }
}
