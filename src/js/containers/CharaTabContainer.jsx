import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex, getLocal, repaintChara } from '../../store/chara';
import { memoizedCurrentIndex, memoizedLocalData } from '../../store/selector/chara';
import CharaTab from '../components/element/CharaTab';

const CharaTabContainer = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(memoizedCurrentIndex);
  const localData = useSelector(memoizedLocalData);

  const onSelect = i => {
    dispatch(setCurrentIndex(i));
    dispatch(repaintChara(i));
    dispatch(getLocal());
  }

  const onNewTab = () => {
    const newItem = {name: '더블클릭하여 수정', data: []};
    const parse = [...localData];
    parse.push(newItem);
    
    localStorage.setItem('charaData', JSON.stringify(parse));
    dispatch(getLocal());
  }

  return (
    <CharaTab 
      onSelect={onSelect}
      onNewTab={onNewTab}
      charaData={localData}
      currentIndex={currentIndex}
    />
  );
};

export default CharaTabContainer;