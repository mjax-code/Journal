import React, { Component } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import styles from '../styleSheets/JournalNamesStyles';

export default class NoteList extends Component {
  static navigationOptions = {
    title: 'test',
  }
  render() {
    return(
      <View>
        <Text>Alex likes the ibtppw</Text>
      </View>
    );
  }
}