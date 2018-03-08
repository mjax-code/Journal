import React, { Component } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import styles from '../styleSheets/NoteListStyles';

export default class NoteList extends Component {
  render() {
    return(
      <View>
        <Text>Journal Name</Text>
        <FlatList
          data={}
          renderItem={(item) => 
            <Button/>
          }
        />
      </View>
    );
  }
}