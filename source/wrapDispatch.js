import decorateAction from './decorateAction';

/**
 * @param {function} dispatch
 * @param {string|number|function} idCreator
 * @returns {function}
 */
const wrapDispatch = (dispatch, idCreator) => (action) =>
  dispatch(decorateAction(idCreator, action))

export default wrapDispatch
