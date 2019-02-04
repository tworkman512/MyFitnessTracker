import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AddEntry from './components/AddEntry'
import History from './components/History'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import Tabs from './components/Tabs'

// const Tabs = createBottomTabNavigator({
//   History: {
//     screen: History,
//     navigationOptions: {
//       tabBarLabel: 'History',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     }
//   },
//   AddEntry: {
//     screen: AddEntry,
//     navigationOptions: {
//       tabBarLabel: 'Add Entry',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='plus-square' size={30} color={tintColor} />
//     }
//   },
// },
// {
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowOpacity: 1,
//       shadowRadius: 0.8,
//       shadowColor: 'rgba(0,0,0,0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3,
//       }
//     }
//   }
// })
//
// export default createAppContainer(Tabs)

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducer) }>
      <View style={{flex: 1}}>
        {/* <AddEntry /> */}
        <View style={{height: 20}} />
        {/* <History /> */}
        <Tabs />
      </View>
      </Provider>
    )
  }
}
