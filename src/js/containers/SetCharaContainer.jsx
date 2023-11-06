import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SetCharaForm from '../components/form/SetCharaForm';
import { setChara } from '../../store/chara';

const SetCharaContainer = ({ toggleMore }) => {
  const dispatch = useDispatch();
  const [ selected, setSelected ] = useState([]);
  const { form, charaData } = useSelector(({ chara }) => ({
    form: chara.form,
    charaData: chara.charaData,
  }));

  const onSelect = i => {
    const selectEle = charaData[i];

    if ( selected.filter(item => item.CharacterName === selectEle.CharacterName).length > 0 ) {
      // 중복시 제거
      setSelected(selected.filter(item => item.CharacterName !== selectEle.CharacterName));
    } else {
      // 신규
      setSelected(selected => [...selected, selectEle]);
    }
  }

  const onSubmit = e => {
    e.preventDefault();

    const data = [];
    selected.map(item => {
      data.push({
        CharacterName: item.CharacterName,
        CharacterLevel: item.CharacterLevel,
        ItemMaxLevel: item.ItemMaxLevel,
        CharacterClassName: item.CharacterClassName,
        ServerName: item.ServerName,
        raids: [],
      });
    })

    dispatch(setChara( data ));
    // 초기화면으로
    toggleMore();
  }

  return (
    <SetCharaForm 
      charaData={charaData}
      selected={selected}
      onSelect={onSelect}
      onSubmit={onSubmit}
    />
  );
};

export default SetCharaContainer;
