import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestThunk from '../lib/createRequestThunk';
import * as charaAPI from '../lib/api/chara';

const CHANGE_FIELD = 'chara/CHANGE_FIELD';
const INITIALIZE_FORM = 'chara/INITIALIZE_FORM';
// 캐릭터정보 GET
const GET_CHARA = 'chara/GET_CHARA';
const GET_CHARA_SUCCESS = 'chara/GET_CHARA_SUCCESS';
const GET_CHARA_FAILURE = 'chara/GET_CHARA_FAILURE';

export const changeField = createAction(CHANGE_FIELD, ({ form, name, value }) => ({ form, name, value }));
export const initializeForm = createAction(INITIALIZE_FORM);

export const getChara = createRequestThunk(GET_CHARA, charaAPI.getChara);

const initialState = {
  form: {
    characterName: '',
  },
  charaData: null,
};

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { value } }) => 
    produce(state, draft => {
      draft.form.characterName = value;
    }),
    [INITIALIZE_FORM]: state =>
      produce(state, draft => {
        draft.form = initialState.form;
        draft.charaData = null;
      }),
    [GET_CHARA_SUCCESS]: (state, { payload: data }) =>
      produce(state, draft => {
        draft.charaData = data;
      }),
  },
  initialState,
)