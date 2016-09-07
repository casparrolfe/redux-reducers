import { ID_KEY } from './constants';

export default function wrapActionCreator(id, actionCreator) {
  return function wrappedActionCreator(...args) {
    const action = actionCreator(...args);

    return {
      ...action,
      [ID_KEY]: id,
    };
  }
}
