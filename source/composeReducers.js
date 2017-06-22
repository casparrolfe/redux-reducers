const composeReducers = (...reducers) => (state, action) =>
  reducers
    .reverse()
    .reduce((newState, reducer) => reducer(newState, action), state)

export default composeReducers