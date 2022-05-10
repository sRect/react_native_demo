import React, {useEffect, useState, memo} from 'react';
import {View, Text} from 'react-native';

const FetchDemo = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://httpbin.org/uuid')
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>fetch data: {data}</Text>
    </View>
  );
};

export default memo(FetchDemo);
