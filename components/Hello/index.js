import React, {useState} from 'react';
import {View, TextInput, Text, Image} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Hello = () => {
  const [val, setVal] = useState('hello');
  return (
    <View style={{padding: 10}}>
      <Image source={logo} />
      <Text style={{fontSize: 20}}>input: {val}</Text>
      <TextInput
        style={{
          borderColor: '#cccccc',
          borderWidth: 1,
        }}
        placeholder="please input..."
        defaultValue={val}
        onChangeText={text => setVal(text)}
      />
    </View>
  );
};

export default Hello;
