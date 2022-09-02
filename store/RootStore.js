import React, {memo} from 'react';
import {useImmerReducer} from 'use-immer';
import {Context} from './index';
import {
  reducers as CountReducers,
  states as CountStates,
} from '../pages/CountDemo/store';

import {
  reducers as UuidReducers,
  states as UuidStates,
} from '../pages/FetchDemo/store';

const RootStore = props => {
  const [contObj, dispatchCount] = useImmerReducer(
    CountReducers.counterReducer,
    CountStates.countData,
  );

  const [uuidObj, dispatchUuid] = useImmerReducer(
    UuidReducers.uuidReducer,
    UuidStates.uuidData,
  );

  return (
    <Context.Provider value={{contObj, dispatchCount, uuidObj, dispatchUuid}}>
      {props.children}
    </Context.Provider>
  );
};

export default memo(RootStore);
