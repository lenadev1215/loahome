import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RaidList from '../components/element/RaidList';
import { setChara, removeChara } from '../../store/chara';
import { memoizedLocalCharaData } from '../../store/selector/chara';

const RaidListContainer = ({ charaName, charaRaids }) => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);
  const [ selectIndex, setSelectIndex ] = useState(null);

  // 현재 chara index 저장
  useEffect(() => {
    setSelectIndex(localCharaData.findIndex(item => item.CharacterName === charaName))
  }, []);

  const updateChara = updateFc => {
    // 현재 캐릭터
    const newChara = [...localCharaData];
    // 업데이트 함수
    newChara[selectIndex].raids = updateFc(newChara[selectIndex].raids);
    dispatch(setChara(newChara));
  }

  // 레이드 목록 선택시 chara에 저장
  const onSelect = e => {
    e.preventDefault();
    const { dataset } = e.target;

    updateChara(raid => [...raid, { name: dataset.name, difficulty: dataset.difficulty, gold: dataset.gold, completed: false }]);
  }

  // 레이드 목록에서 레이드 삭제
  const onDelete = name => {
    updateChara(raid => raid.filter(item => item.name !== name));
  }

  // 레이드 목록 set
  const onCheck = name => {
    updateChara(raid => raid.map(item => (item.name === name ? { ...item, completed: true } : item)));
  }

  // custom 골드 submit
  const onSubmit = ( gold, i, e ) => {
    e.preventDefault();
    
    const updateFc = raids => {
      const updateRaids = [...raids];

      updateRaids[i] = {
        ...updateRaids[i],
        gold
      };

      return updateRaids;
    }
    updateChara(updateFc);
  }

  return (
    <RaidList 
      charaRaids={charaRaids}
      onSelect={onSelect}
      onDelete={onDelete}
      onCheck={onCheck}
      onSubmit={onSubmit}
    />
  );
};

export default RaidListContainer;