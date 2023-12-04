// selectors.js 파일
import { createSelector } from 'reselect';

const getLocalCharaDataSelector = state => state.chara.localCharaData;
export const memoizedLocalCharaData = createSelector(
  [getLocalCharaDataSelector],
  localCharaData => localCharaData
);

const getCurrentIndex = state => state.chara.currentIndex;
export const memoizedCurrentIndex = createSelector(
  [getCurrentIndex],
  currentIndex => currentIndex
);

const getTotalGold = state => state.chara.totalGold;
export const memoizedTotalGold = createSelector(
  [getTotalGold],
  totalGold => totalGold
);