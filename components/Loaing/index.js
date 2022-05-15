import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Loading = (props = {loadingText: ''}) => {
  const [loadingText, setLoadingText] = useState('loading...');

  useEffect(() => {
    setLoadingText(props.loadingText);
  }, [props.loadingText]);

  return (
    <View>
      <Text>{loadingText}</Text>
    </View>
  );
};

export default Loading;
