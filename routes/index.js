import React, {lazy} from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';

import Home from '../pages/Home';
// import MyFlatList from './pages/MyFlatList';
const MyFlatList = lazy(() => import('../pages/MyFlatList'));
const FetchDemo = lazy(() => import('../pages/FetchDemo'));

const RouterConfig = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/flatlist" element={<MyFlatList />} />
        <Route path="/fetch" element={<FetchDemo />} />
      </Routes>
    </NativeRouter>
  );
};

export default RouterConfig;
