import React, {useEffect, useState, memo} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const FetchDemo = () => {
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

        setUuid(responseJson ? responseJson.uuid : '');
      } catch (error) {
        console.log('err==>');
        console.error(error);
      } finally {
        setLoding(false);
      }
    })();
  }, []);

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
