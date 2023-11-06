import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SetCharaForm from '../components/form/SetCharaForm';
import { changeField, getChara } from '../../store/chara';

const SetCharaContainer = () => {
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
