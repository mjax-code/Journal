import React, { Component } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import styles from '../styleSheets/JournalNamesStyles';
import dummyData from '../constants/dummyData';

export default class JournalNames extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <FlatList
          data={dummyData}
          renderItem={({item}) => 
          <Button
            onPress={() => 
              navigate("NoteList", {name : item.journal})}
            title={item.journal}
            color="blue"
          />
          }
        />
      </View>

    );
  }
}