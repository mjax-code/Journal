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
          //<Text style={styles.item}>{item.key}</Text>
          <Button
            onPress={() => 
              navigate("NoteList", {name : item.key})}
            title={item.key}
            color="blue"
          />
          }
        />
      </View>

    );
  }
}