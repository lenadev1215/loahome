import { createAction, handleActions } from 'redux-actions';
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
    characterName: '',
  },
  charaData: [],
  localCharaData: [],
};

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, name, value } }) => {
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    },
    [INITIALIZE_FORM]: state => {
      return {
        ...state,
        form: initialState.form,
        charaData: [],
      };
    },
    [GET_CHARA_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        charaData: data,
      };
    },
    [SET_CHARA]: (state, { payload: data }) => {
      const dupl = [...state.localCharaData, ...data];
      const uniqueData = removeDuplicates(dupl, 'CharacterName');
      localStorage.setItem('charaData', JSON.stringify(uniqueData));

      return {
        ...state,
        localCharaData: uniqueData,
      };
    },
    [REMOVE_CHARA]: (state, { payload: name }) => {
      const newData = state.localCharaData.filter(item => item.CharacterName !== name);
      localStorage.setItem('charaData', JSON.stringify(newData));

      return {
        ...state,
        localCharaData: newData,
      };
    },
  },
  initialState
);

// 중복 name 제거 함수
const removeDuplicates = (arr, key) => {
  const set = new Set();
  return arr.filter(item => {
    const value = item[key];
    if (!set.has(value)) {
      set.add(value);
      return true;
    }
    return false;
  });
};