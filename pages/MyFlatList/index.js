import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, Platform} from 'react-native';

const arr = [...Array(100).keys()];
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
  useEffect(() => {
    console.log(Platform);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text>当前平台：{Platform.OS}</Text>
      <FlatList
        data={arr}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

export default MyFlatList;
