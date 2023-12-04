import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex, getLocal, repaintChara } from '../../store/chara';
import { memoizedCurrentIndex } from '../../store/selector/chara';
import CharaTab from '../components/element/CharaTab';

const CharaTabContainer = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(memoizedCurrentIndex);
  const { localData } = useSelector(({ chara }) => ({
    localData: chara.localData,
  }));

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