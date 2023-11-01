import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const GET_LOCALKEY = 'common/GET_LOCALKEY';
const SET_ACTIVE = 'common/SET_ACTIVE';

export const getLocalKey = createAction(GET_LOCALKEY);
export const setActive = createAction(SET_ACTIVE);

const initialState = {
  activeIndex: 0,
  key: [],
};

export default handleActions(
  {
    [GET_LOCALKEY]: (state, { payload: { key } }) => 
    produce(state, draft => {
      draft.key = key;
    }),
    [SET_ACTIVE]: (state, { payload: { i } }) => 
    produce(state, draft => {
      draft.activeIndex = i;
    }),
  },
  initialState,
)