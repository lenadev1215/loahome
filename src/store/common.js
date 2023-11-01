import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const GET_LOCALKEY = 'common/GET_LOCALKEY';

export const getLocalKey = createAction(GET_LOCALKEY);

const initialState = {
  key: [],
};

export default handleActions(
  {
    [GET_LOCALKEY]: (state, { payload: { key } }) => 
    produce(state, draft => {
      draft.key = key;
    }),
  },
  initialState,
)