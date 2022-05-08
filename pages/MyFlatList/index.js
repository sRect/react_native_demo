import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const arr = [...Array(20).keys()];
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  listItem: {
    padding: 10,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MyFlatList() {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={arr}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

export default MyFlatList;
