import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RaidList from '../components/element/RaidList';
import { setChara, removeChara } from '../../store/chara';
import { memoizedLocalCharaData } from '../../store/selector/chara';

const RaidListContainer = ({ charaName, charaRaids }) => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);

  const onSelect = e => {
    e.preventDefault();
    const { dataset } = e.target;
    const selectChara = localCharaData.findIndex(item => item.CharacterName === charaName);
    
    // 배열 리페인트
    const newChara = [...localCharaData];
    newChara[selectChara].raids.push({ name: dataset.name, difficulty: dataset.difficulty });
    dispatch(setChara(newChara));
  }

  return (
    <RaidList 
      charaRaids={charaRaids}
      onSelect={onSelect}
    />
  );
};

export default RaidListContainer;
