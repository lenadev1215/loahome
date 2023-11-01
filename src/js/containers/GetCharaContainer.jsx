import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetCharaForm from '../components/form/GetCharaForm';
import { changeField, initializeForm, getChara } from '../../store/chara';

const GetCharaContainer = () => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState(false);
  const { form, success } = useSelector(({ chara }) => ({
    form: chara.form,
    success: chara.success,
  }));

  // page clear
  useEffect(() => {
    dispatch(initializeForm());
  }, []);

  const onChange = e => {
    const { value } = e.target;
    dispatch(changeField({ value }));
  }
  
  const onSubmit = e => {
    e.preventDefault();
    const {
      characterName
    } = form;

    if ( !characterName ) {
      alert('캐릭터이름을 입력해주세요.')
    }

    dispatch(getChara({ characterName }));
  }

  // 통신 성공 시
  useEffect(() => {
    if ( success ) {
      console.log(success);
    } else {
      // alert('false');
    }
  }, [ success ]);

  return (
    <GetCharaForm 
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default GetCharaContainer;
