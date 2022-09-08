import React, {useContext, memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Context} from '../../store';
import {actions} from './store';

const CountDemo = () => {
  const {uuidObj, contObj, dispatchCount} = useContext(Context);

  const handleIncrement = () => dispatchCount(actions.increment(1));

  const handleDecrement = () => dispatchCount(actions.decrement(1));

  return (
    <View>
      <View>
        <View>
          <Text>uuid: {uuidObj.uuid}</Text>
        </View>
        <Text>count: {contObj.count}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text>increament</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text>decreament</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default memo(CountDemo);
