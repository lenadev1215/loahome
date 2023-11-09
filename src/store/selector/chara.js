// selectors.js 파일
import { createSelector } from 'reselect';

const getLocalCharaDataSelector = state => state.chara.localCharaData;

export const memoizedLocalCharaData = createSelector(
  [getLocalCharaDataSelector],
  localCharaData => localCharaData
);