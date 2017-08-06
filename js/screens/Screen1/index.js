import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MakeTries from './../../components/MakeTriesComponent';
import SleepComponent from './../../components/SleepComponent';

export default class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <MakeTries />
        </View>
        <View style={styles.subContainer}>
          <SleepComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5
  }
});

AppRegistry.registerComponent('reactpromisedcomponentexample', () => reactpromisedcomponentexample);
