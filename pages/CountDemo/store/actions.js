import * as types from './types';

export const increment = (count = 1) => {
  return {
    type: types.INCREMENT,
    payload: count,
  };
};

export const decrement = (count = 1) => {
  return {
    type: types.DECREMENT,
    payload: count,
  };
};
