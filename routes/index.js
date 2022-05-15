import React, {lazy, Fragment} from 'react';
import {NativeRouter as Router, Routes, Route, Link} from 'react-router-native';
import {View, Text, StyleSheet} from 'react-native';

import Home from '../pages/Home';
// import MyFlatList from './pages/MyFlatList';
const MyFlatList = lazy(() => import('../pages/MyFlatList'));
const FetchDemo = lazy(() => import('../pages/FetchDemo'));

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

const arr = [
  {
    to: '/',
    text: 'home',
  },
  {
    to: '/flatlist',
    text: 'flatlist',
  },
  {
    to: '/fetch',
    text: 'fetch',
  },
];

const RouterConfig = () => {
  return (
    <Router>
      <Fragment>
        <View>
          {arr.map((item, index) => {
            return (
              // https://github.com/remix-run/react-router/issues/8351
              <Link to={item.to} key={index}>
                <View style={styles.button}>
                  <Text>{item.text}</Text>
                </View>
              </Link>
            );
          })}
        </View>
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/flatlist" element={<MyFlatList />} />
          <Route path="/fetch" element={<FetchDemo />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RouterConfig;
