import * as types from './types';
import {uuidData} from './states';

// https://www.npmjs.com/package/use-immer
export const uuidReducer = (draft, action) => {
  switch (action.type) {
    case types.SET_UUID:
      draft.uuid = action.payload;
      break;
    default:
      return uuidData;
  }
};
