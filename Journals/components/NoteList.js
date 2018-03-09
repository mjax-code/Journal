import React, { Component } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import styles from '../styleSheets/NoteListStyles';

export default class NoteList extends Component {
  temp = [];
  render() {
    return(
      <View>
        <Text>Journal Name</Text>
        <FlatList
          data={this.temp}
          renderItem={(item) => 
            <Button
              title='test'
            />
          }
        />
      </View>
    );
  }
}