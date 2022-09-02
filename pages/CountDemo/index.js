import React, {useContext, memo} from 'react';
import {View, Text, Button} from 'react-native';
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
        <Button onPress={handleIncrement} title="increament" color="#841584" />
        <Button onPress={handleDecrement} title="decreament" color="#841584" />
      </View>
    </View>
  );
};

export default memo(CountDemo);
