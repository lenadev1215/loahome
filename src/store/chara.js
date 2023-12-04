import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from '../lib/createRequestThunk';
import * as charaAPI from '../lib/api/chara';
import { localStorageUpdate } from '../lib/util/charaUpdate';

const CHANGE_FIELD = 'chara/CHANGE_FIELD';
const INITIALIZE_FORM = 'chara/INITIALIZE_FORM';
// 캐릭터정보 GET
const GET_CHARA = 'chara/GET_CHARA';
const GET_CHARA_SUCCESS = 'chara/GET_CHARA_SUCCESS';
const GET_CHARA_FAILURE = 'chara/GET_CHARA_FAILURE';
// 로컬스토리지 캐릭터정보 Set
const GET_LOCAL = 'chara/GET_LOCAL';
const SET_CHARA = 'chara/SET_CHARA';
const REPAINT_CHARA = 'chara/REPAINT_CHARA';
// 로컬스토리지 캐릭터정보 Remove
const REMOVE_CHARA = 'chara/REMOVE_CHARA';
// 총 골드량 저장
const SET_TOTALGOLD = 'chara/SET_TOTALGOLD';
// 현재 페이지 index저장
const SET_CURRENT_INDEX = 'chara/SET_CURRENT_INDEX';

export const changeField = createAction(CHANGE_FIELD, ({ form, name, value }) => ({ form, name, value }));
export const setChara = createAction(SET_CHARA, data => data);
export const repaintChara = createAction(REPAINT_CHARA, i => i);
export const getLocal = createAction(GET_LOCAL);
export const removeChara = createAction(REMOVE_CHARA, name => name);
export const initializeForm = createAction(INITIALIZE_FORM);
export const setTotalGold = createAction(SET_TOTALGOLD, gold => gold);
export const setCurrentIndex = createAction(SET_CURRENT_INDEX, index => index);

export const getChara = createRequestThunk(GET_CHARA, charaAPI.getChara);

const initialState = {
  form: {
    characterName: '',
  },
  charaData: [],
  localData: [],
  localCharaData: [],
  currentIndex: 0,
  totalGold: 0,
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
    [GET_LOCAL]: state => {
      const data = localStorage.getItem('charaData');
      const parse = JSON.parse(data);

      return {
        ...state,
        localData: parse,
      };
    },
    [SET_CHARA]: (state, { payload: data }) => {
      const dupl = [...state.localCharaData, ...data];
      const uniqueData = removeDuplicates(dupl, 'CharacterName');
      localStorageUpdate(state.currentIndex, 'data', uniqueData);

      return {
        ...state,
        localCharaData: uniqueData,
      };
    },
    [REPAINT_CHARA]: (state, { payload: i }) => {
      const data = state.localData[i].data;

      return {
        ...state,
        localCharaData: data,
      };
    },
    [REMOVE_CHARA]: (state, { payload: name }) => {
      const newData = state.localCharaData.filter(item => item.CharacterName !== name);
      localStorageUpdate(state.currentIndex, 'data', newData);

      return {
        ...state,
        localCharaData: newData,
      };
    },
    [SET_TOTALGOLD]: (state, { payload: gold }) => {
      return {
        ...state,
        totalGold: gold,
      };
    },
    [SET_CURRENT_INDEX]: (state, { payload: index }) => {
      return {
        ...state,
        currentIndex: index,
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