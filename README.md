# redux-reducers

Unobtrusive reusable redux reducers

## Usage

Given the following action creator and reducer:

```js
function add(payload) {
  return {
    type: 'ADD',
    payload
  };
}

add(1) // { type: 'ADD', payload: 1 }

function addReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
}

```

### `wrapActionCreator(id, actionCreator)`

```js
import { wrapActionCreator } from 'redux-reducers';

const wrappedAdd = wrapActionCreator('target ID', add);

wrappedAdd(1) // { type: 'ADD', payload: 1, __REDUCER_ID__: 'target ID' }
```

### `wrapReducer(id, reducer)`

```js
import { createStore, combineReducers } from 'redux';
import { wrapReducer, wrapActionCreator } from 'redux-reducers';

const reducer = combineReducers({
  one: wrapReducer('targetID', addReducer),
  two: wrapReducer('two', addReducer),
});

const store = createStore(reducer);

const wrappedAdd = wrapActionCreator('target ID', add);

store.dispatch(wrappedAdd(1));

store.getState(); // { one: 1, two: 0 }
```
