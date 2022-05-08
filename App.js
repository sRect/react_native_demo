import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';

import Home from './pages/Home';
import MyFlatList from './pages/MyFlatList';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/flatlist" element={<MyFlatList />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
