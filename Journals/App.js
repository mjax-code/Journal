import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { JournalApp } from './NavConfig';
export default class App extends React.Component {
  render() {
    return (
      <JournalApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
