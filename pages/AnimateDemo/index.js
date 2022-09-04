import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  ball: (width, height) => ({
    width: 100,
    height: 100,
    borderRadius: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    position: 'absolute',
    top: height / 1.5,
    left: width / 2 - 50,
    overflow: 'hidden',
  }),
  txt: {
    color: '#ffffff',
    fontFamily: 'lucida grande',
    fontSize: 24,
  },
});

const AnimateDemo = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  const handlePress = () => {
    console.log('press');
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={handlePress}>
        <View style={styles.ball(windowWidth, windowHeight)}>
          <Text style={styles.txt}>click</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default memo(AnimateDemo);
