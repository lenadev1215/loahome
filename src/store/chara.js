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
// 로컬스토리지 캐릭터정보 Set
const SET_CHARA = 'chara/SET_CHARA';
// 로컬스토리지 캐릭터정보 Remove
const REMOVE_CHARA = 'chara/REMOVE_CHARA';

export const changeField = createAction(CHANGE_FIELD, ({ form, name, value }) => ({ form, name, value }));
export const setChara = createAction(SET_CHARA, data => data);
export const removeChara = createAction(REMOVE_CHARA, name => name);
export const initializeForm = createAction(INITIALIZE_FORM);

export const getChara = createRequestThunk(GET_CHARA, charaAPI.getChara);

const initialState = {
  form: {
    characterName: '놀자에여',
  },
  charaData: [],
  localCharaData: [],
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
        draft.charaData = [];
      }),
    [GET_CHARA_SUCCESS]: (state, { payload: data }) =>
      produce(state, draft => {
        draft.charaData = data;
      }),
    [SET_CHARA]: (state, { payload: data }) =>
      produce(state, draft => {
        draft.localCharaData = data;
        
        const localData = localStorage.getItem('charaData');
        const parse = JSON.parse(localData);

        // 중복 name 제거
        const removeDuplicates = (arr, key) => {
          const set = new Set();
          return arr.filter(item => {
            const value = item[key];
            if ( !set.has(value) ) {
              set.add(value);
              return true;
            }
            return false;
          })
        }

        const dupl = [...parse, ...draft.localCharaData];
        const uniqueData = removeDuplicates(dupl, 'CharacterName');
        localStorage.setItem('charaData', JSON.stringify(uniqueData));
      }),
    [REMOVE_CHARA]: (state, { payload: name }) =>
      produce(state, draft => {
        const localData = localStorage.getItem('charaData');
        const parse = JSON.parse(localData);
        
        const newData = parse.filter(item => item.CharacterName !== name);
        draft.localCharaData = newData;

        localStorage.setItem('charaData', JSON.stringify(newData));
      }),
  },
  initialState,
)