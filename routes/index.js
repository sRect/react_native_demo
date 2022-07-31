import React, {lazy, Fragment} from 'react';
import {NativeRouter as Router, Routes, Route, Link} from 'react-router-native';
import {View, Text, StyleSheet} from 'react-native';

import Home from '../pages/Home';
// import MyFlatList from './pages/MyFlatList';
const MyFlatList = lazy(() => import('../pages/MyFlatList'));
const FetchDemo = lazy(() => import('../pages/FetchDemo'));
const CountDemo = lazy(() => import('../pages/CountDemo'));

const styles = StyleSheet.create({
  link: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 50,
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
  },
  txt: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'lucida grande',
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
  {
    to: '/count',
    text: 'count',
  },
];

const RouterConfig = () => {
  return (
    <Router>
      <Fragment>
        <View style={styles.link}>
          {arr.map((item, index) => {
            return (
              // https://github.com/remix-run/react-router/issues/8351
              <Link to={item.to} key={index}>
                <View style={styles.button}>
                  <Text style={styles.txt}>{item.text}</Text>
                </View>
              </Link>
            );
          })}
        </View>
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/flatlist" element={<MyFlatList />} />
          <Route path="/fetch" element={<FetchDemo />} />
          <Route path="/count" element={<CountDemo />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RouterConfig;
