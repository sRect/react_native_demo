import React, {useEffect, useState, memo, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Context} from '../../store';
import {actions} from './store';

const FetchDemo = () => {
  const {dispatchUuid} = useContext(Context);
  const [isShowLoding, setLoding] = useState(false);
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    !(async function () {
      setLoding(true);

      try {
        const res = await fetch('https://httpbin.org/uuid');
        let responseJson = await res.json();
        console.log('====>res');
        console.log(responseJson);
        let data = responseJson ? responseJson.uuid : '';

        setUuid(data);
        dispatchUuid(actions.setUuid(data));
      } catch (error) {
        console.log('err==>');
        console.error(error);
      } finally {
        setLoding(false);
      }
    })();
  }, [dispatchUuid]);

  return (
    <View>
      {isShowLoding ? (
        <ActivityIndicator
          animating={isShowLoding}
          size="large"
          color="#00ff00"
        />
      ) : (
        <View>
          <Text>fetch uuid: {uuid}</Text>
        </View>
      )}
    </View>
  );
};

export default memo(FetchDemo);
