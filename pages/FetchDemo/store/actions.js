import * as types from './types';

export const setUuid = uuid => {
  return {
    type: types.SET_UUID,
    payload: uuid,
  };
};
