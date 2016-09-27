import { ID_KEY } from './constants';

/**
 * @param {string|number|function} idCreator
 * @param {Object} action
 * @returns {Object}
 */
function mapActionToId(idCreator, action) {
  switch (typeof idCreator) {
    case 'string':
    case 'number':
      return idCreator;
    case 'function':
      return idCreator(action);
    default:
      throw new Error('Incompatible value passed to idCreator');
  }
}

/**
 * @param {string|number|function} idCreator
 * @param {Object} action
 * @returns {Object}
 */
export default function decorateAction(idCreator, action) {
  return {
    ...action,
    [ID_KEY]: mapActionToId(idCreator, action),
  };
}
