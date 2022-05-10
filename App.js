import React from 'react';
import {Link, useNavigate} from 'react-router-native';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import RouterConfig from './routes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navWraper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const arr = [
  {
    to: '/',
    text: 'home',
  },
  {
    to: '/flatlist',
    text: 'flatlist',
  },
];

const App = () => {
  const navigate = useNavigate();

  const handlePress = ({to: path}) => {
    navigate(path, {replace: true});
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.navWraper}>
        {arr.map((item, index) => (
          <TouchableHighlight onPress={() => handlePress(item)} key={index}>
            <View to={item.to} style={styles.button}>
              <Text>{item.text}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>

      <RouterConfig />
    </View>
  );
};

export default App;
