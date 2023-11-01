import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SET_ACTIVE = 'common/SET_ACTIVE';

export const setActive = createAction(SET_ACTIVE);

const initialState = {
  activeIndex: 0,
};

export default handleActions(
  {
    [SET_ACTIVE]: (state, { payload: { i } }) => 
    produce(state, draft => {
      draft.activeIndex = i;
    }),
  },
  initialState,
)