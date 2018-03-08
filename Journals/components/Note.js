import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from '../styleSheets/NoteStyles';

export default class Note extends Component {
  render() {
    return (
      <View>
        <Text>NoteTitle</Text>
        <Text>NoteBody</Text>
        <TextInput/>
      </View>
    );
  }
}
