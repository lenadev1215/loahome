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
    dispatch(setCurrentIndex(localData.length));
    dispatch(repaintChara(localData.length));
  }

  // 탭 이름 변경
  const onSubmit = ( name, e ) => {
    e.preventDefault();

    const data = [...localData];
    data[currentIndex].name = name;
    localStorage.setItem('charaData', JSON.stringify(data));
    dispatch(getLocal());
  }

  // 탭 삭제
  const onDelete = i => {
    const data = [...localData];
    const newData = data.filter((item, idx) => idx !== i);

    localStorage.setItem('charaData', JSON.stringify(newData));
  }

  return (
    <CharaTab 
      onSelect={onSelect}
      onNewTab={onNewTab}
      onSubmit={onSubmit}
      onDelete={onDelete}
      charaData={localData}
      currentIndex={currentIndex}
    />
  );
};

export default CharaTabContainer;