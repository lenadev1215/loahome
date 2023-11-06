import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharaList from '../components/element/CharaList';
import { setChara } from '../../store/chara';

const CharaListContainer = ({ toggleApply }) => {
  const dispatch = useDispatch();
  const { localCharaData } = useSelector(({ chara }) => ({
    localCharaData: chara.localCharaData,
  }));

  // 초기 localData set
  useEffect(() => {
    if ( localStorage.getItem('charaData') === null ) 
      localStorage.setItem('charaData', JSON.stringify([]));

    const data = localStorage.getItem('charaData');
    const parse = JSON.parse(data);
    dispatch(setChara(parse));
  }, []);

  // 로컬스토리지 상태관리
  useEffect(() => {
    // init

    // const localData = localStorage.getItem('charaData');
    // const pureData = localCharaData.filter(item => item.CharacterName !== localData.CharacterName);

    // console.log(pureData);
    // localStorage.setItem('charaData', JSON.stringify(pureData));
  }, [ localCharaData ]);

  return (
    <CharaList 
      toggleApply={toggleApply}
      localCharaData={localCharaData}
    />
  );
};

export default CharaListContainer;
