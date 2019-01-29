import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
  },
});
