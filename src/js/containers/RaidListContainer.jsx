import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RaidList from '../components/element/RaidList';
import { setChara, removeChara } from '../../store/chara';
import { memoizedLocalCharaData } from '../../store/selector/chara';

const RaidListContainer = ({ charaName, charaRaids }) => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);

  const updateChara = updateFc => {
    // 현재 캐릭터
    const selectChara = localCharaData.findIndex(item => item.CharacterName === charaName);
    const newChara = [...localCharaData];
    // 업데이트 함수
    newChara[selectChara].raids = updateFc(newChara[selectChara].raids);
    dispatch(setChara(newChara));
  }

  const onSelect = e => {
    e.preventDefault();
    const { dataset } = e.target;

    updateChara(raid => [...raid, { name: dataset.name, difficulty: dataset.difficulty, completed: false }]);
  }

  const onDelete = name => {
    updateChara(raid => raid.filter(item => item.name !== name));
  }

  const onCheck = name => {
    updateChara(raid => raid.map(item => (item.name === name ? { ...item, completed: true } : item)));
  }

  return (
    <RaidList 
      charaRaids={charaRaids}
      onSelect={onSelect}
      onDelete={onDelete}
      onCheck={onCheck}
    />
  );
};

export default RaidListContainer;