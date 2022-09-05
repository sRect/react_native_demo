import React, {memo, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  // Pressable,
  Button,
} from 'react-native';
import CubicBezier from '@thednp/bezier-easing';

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
  btnWrap: height => ({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: height - 100,
    zIndex: 10,
  }),
  btnTxt: {
    color: 'red',
    fontFamily: 'lucida grande',
  },
});

// const linear = t => t;

const slow_down = t => {
  return 2 * t - t * t;
};

const easeCubicInOut = t => {
  let func = new CubicBezier(0.56, 1.6, 0.07, 0.31);
  return func(t);
};

const bounce = t => {
  let func = new CubicBezier(1, 2.86, 0, -0.55);
  return func(t);
};

const interpolate = (rangA, rangB) => {
  return value => {
    const r = (rangB[1] - rangB[0]) / (rangA[1] - rangA[0]);

    return rangB[0] + r * (value - rangA[0]);
  };
};

/**
 * 动画
 * @param {Number} duration 动画持续时间
 * @param {Function} easingFunc 动画函数
 * @param {Function} callback 回调函数
 */
const animate = (duration, easingFunc, callback) => {
  const i_time = interpolate([0, duration], [0, 1]);
  const t_start = new Date().getTime();

  const _inner = () => {
    requestAnimationFrame(() => {
      let t_diff = new Date().getTime() - t_start;

      if (t_diff >= duration) {
        t_diff = duration;
      }

      // 运动函数时间
      // [0, duration]时间段，在t_diff当前时刻，映射到[0, 1]上，此时的时间，即当前时间完成的百分比
      const t = i_time(t_diff); // 当前时间完成的百分比
      console.log('t==>', t);
      const d = easingFunc(t); // 0到1之间，此时的距离s

      callback(d, t_diff === duration ? null : _inner);
    });
  };

  _inner();
};

const AnimateDemo = () => {
  const [top, setTop] = useState(0);
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  // 将[0, 1]距离，映射到[x,x]实际上，计算出真实距离
  const i_func = interpolate([0, 1], [-windowHeight, windowHeight / 1.5]);

  const handlePress = () => {
    console.log('press');
    // 每次点击，都将距离重置为0
    setTop(0);

    animate(1000, bounce, (value, next) => {
      setTop(value);
      next && next();
    });
  };

  useEffect(() => {
    console.log('top==>', top);
    if (top === windowHeight / 1.5) {
      return;
    }
  }, [top, windowHeight]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.ball(windowWidth, i_func(top))}>
        <Text style={styles.txt}>ball</Text>
      </View>
      <View style={styles.btnWrap(windowHeight)} onPress={handlePress}>
        <Button
          title="animate"
          accessibilityLabel="animate"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default memo(AnimateDemo);
