import React, {useState} from 'react';
import {useNavigate} from 'react-router-native';
import {View, TextInput, Text, Image, Button} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Hello = () => {
  const navigate = useNavigate();

  const [val, setVal] = useState('hello');

  function gotoMyFlatList() {
    navigate('/flatlist', {replace: true});
  }

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
      <Button onPress={() => setVal('')} title="reset val" />
      <Button title="gotoMyFlatList" onPress={gotoMyFlatList} />
    </View>
  );
};

export default Hello;
