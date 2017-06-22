import decorateAction from './decorateAction';

/**
 * @param {string|number|function} idCreator
 * @param {function} actionCreator
 * @returns {Object}
 */
const wrapActionCreator = (idCreator, actionCreator) => (...args) => {
  const action = actionCreator(...args);

  return decorateAction(idCreator, action);
}

export default wrapActionCreator
