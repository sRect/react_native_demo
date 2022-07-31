import React, {Fragment, memo} from 'react';
import {useImmerReducer} from 'use-immer';
import {Context} from './index';
import {
  reducers as CountReducers,
  states as CountStates,
} from '../pages/CountDemo/store';

const RootStore = props => {
  const [contObj, dispatchCount] = useImmerReducer(
    CountReducers.counterReducer,
    CountStates.countData,
  );

  return (
    <Context.Provider value={{contObj, dispatchCount}}>
      {props.children}
    </Context.Provider>
  );
};

export default memo(RootStore);
