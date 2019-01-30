import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
 } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import { submitEntry, removeEntry } from '../utils/api'
import { Ionicons } from '@expo/vector-icons'

import DateHeader from './DateHeader'
import EntrySlider from './EntrySlider'
import EntryStepper from './EntryStepper'
import TextButton from './TextButton'

function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    )
}

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
        [metric]: value,
    }))
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state

    // Update Redux

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    }))

    // Navigate to home

    // Save to 'DB'
    submitEntry({ key, entry })

    // Clear local notification
  }

  reset = () => {
    const key = timeToString()

    // Update Redux

    // Route to Home

    // Update to 'DB'
    removeEntry(key)
  }

  render() {
    const metaInfo = getMetricMetaInfo()

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name='md-happy'
            size={100}
          />
          <Text>You already logged your information for today</Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    }

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                ? <EntrySlider
                    value={value}
                    onChange={(value) => this.slide(key, value)}
                    {...rest}
                  />
                : <EntryStepper
                    value={value}
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                    {...rest}
                  />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}
