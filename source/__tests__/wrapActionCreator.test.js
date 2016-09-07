import test from 'ava';
import wrapActionCreator from '../wrapActionCreator';
import { ID_KEY } from '../constants';

function actionCreator(type, payload, meta) {
  return {
    type,
    payload,
    meta,
  };
}

const mockFluxStandardAction = {
  type: 'TEST_ACTION',
  payload: 'payload',
  meta: 'meta',
};

test('actionCreator creates a flux standard action', (t) => {
  t.plan(1);

  const { type, payload, meta } = mockFluxStandardAction;

  const action = actionCreator(type, payload, meta);

  t.deepEqual(action, mockFluxStandardAction);
});


test('wrapped actions are created with the associated reducer ID', (t) => {
  t.plan(1);

  const testID = 'test id';

  const { type, payload, meta } = mockFluxStandardAction;

  const wrappedActionCreator = wrapActionCreator(testID, actionCreator);
  const wrappedAction = wrappedActionCreator(type, payload, meta);

  t.deepEqual(wrappedAction, {
    ...mockFluxStandardAction,
    [ID_KEY]: testID,
  });
});
