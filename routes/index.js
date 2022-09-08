import React, {lazy, Fragment} from 'react';
import {NativeRouter as Router, Routes, Route, Link} from 'react-router-native';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Home from '../pages/Home';
// import MyFlatList from './pages/MyFlatList';
const MyFlatList = lazy(() => import('../pages/MyFlatList'));
const FetchDemo = lazy(() => import('../pages/FetchDemo'));
const CountDemo = lazy(() => import('../pages/CountDemo'));
const AnimateDemo = lazy(() => import('../pages/AnimateDemo'));
const WebviewDemo = lazy(() => import('../pages/WebviewDemo'));

const styles = StyleSheet.create({
  link: {
    width: '100%',
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  button: {
    // width: 100,
    // height: 50,
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#fcfcfc',
  },
  txt: {
    color: '#ffffff',
    fontSize: 16,
    // fontFamily: 'lucida grande',
  },
  content: {
    flex: 1,
    backgroundColor: 'pink',
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
  {
    to: '/animate',
    text: 'animate',
  },
  {
    to: '/webviewdemo',
    text: 'webview',
  },
];

const RouterConfig = () => {
  return (
    <Router>
      <Fragment>
        <View style={styles.link}>
          <ScrollView horizontal={true}>
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
          </ScrollView>
        </View>

        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/flatlist" element={<MyFlatList />} />
          <Route path="/fetch" element={<FetchDemo />} />
          <Route path="/count" element={<CountDemo />} />
          <Route path="/animate" element={<AnimateDemo />} />
          <Route path="/webviewdemo" element={<WebviewDemo />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RouterConfig;
