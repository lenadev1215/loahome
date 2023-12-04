import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memoizedLocalCharaData, memoizedCurrentIndex } from '../../store/selector/chara';
import CharaList from '../components/element/CharaList';
import { getLocal, setChara, removeChara } from '../../store/chara';

const CharaListContainer = ({ toggleApply }) => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);
  const currentIndex = useSelector(memoizedCurrentIndex)

  // 초기 localData set
  useEffect(() => {
    if ( localStorage.getItem('charaData') === null ) {
      localStorage.setItem('charaData', JSON.stringify([{
        name: '더블클릭하여 수정',
        data: [
          {
            CharacterName: '각레이드골드더블클릭하여수정',
            CharacterLevel: 0,
            ItemMaxLevel: 0,
            CharacterClassName: '워로드',
            ServerName: '실리안',
            raids: [],
          }
        ]
      }]));
    }

    const data = localStorage.getItem('charaData');
    const parse = JSON.parse(data);
    dispatch(setChara( parse[currentIndex].data ));
    dispatch(getLocal());
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
