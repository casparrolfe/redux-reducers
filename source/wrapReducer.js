import { ID_KEY } from './constants';

const wrapReducer = (id, reducer) => (state, action) => {
  if (!action[ID_KEY] || action[ID_KEY] === id) {
    return reducer(state, action);
  }

  return state;
}

export default wrapReducer
