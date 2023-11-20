import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memoizedLocalCharaData } from '../../store/selector/chara';
import CharaList from '../components/element/CharaList';
import { setChara, removeChara } from '../../store/chara';

const CharaListContainer = ({ toggleApply }) => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);

  // 초기 localData set
  useEffect(() => {
    if ( localStorage.getItem('charaData') === null ) 
      localStorage.setItem('charaData', JSON.stringify([]));

    const data = localStorage.getItem('charaData');
    const parse = JSON.parse(data);
    dispatch(setChara( parse ));
  }, []);

  // 아이템 삭제
  const onRemove = name => {
    dispatch(removeChara( name ));
  }

  return (
    <CharaList 
      localCharaData={localCharaData}
      toggleApply={toggleApply}
      onRemove={onRemove}
    />
  );
};

export default CharaListContainer;
