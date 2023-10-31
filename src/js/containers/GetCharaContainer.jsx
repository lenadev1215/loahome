import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIkeyForm from '../components/form/APIkeyForm';
import { changeField, checkToggle, initializeForm, sendDownload } from '../../store/chara';

const GetCharaContainer = () => {
  const dispatch = useDispatch();
  const [ error, setError ] = useState(false);
  const { downForm, downSuccess } = useSelector(({ qna }) => ({
    downForm: qna.downForm,
    downSuccess: qna.downSuccess,
  }));

  // page clear
  useEffect(() => {
    dispatch(initializeForm());
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'downForm', name, value }));
  }

  const onToggle = e => {
    const { name, checked } = e.target;
    dispatch(checkToggle({ form: 'downForm', name, checked }))
  }
  
  const onSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      company,
      dept,
      position,
      privacy
    } = downForm;

    if ( !name || !email ) {
      alert('필수사항을 입력해주세요.')
      return;
    }
    if ( !privacy ) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return;
    }

    dispatch(sendDownload({ name, email, company, dept, position }));
  }

  // qna전송 성공 시
  useEffect(() => {
    if ( downSuccess && downSuccess.success ) {
      dispatch(initializeForm());
      if ( downSuccess.download_link ) {
        window.open(downSuccess.download_link);
      }
      alert('전송이 완료되었습니다.');
    } else if ( downSuccess && downSuccess.error && downSuccess.message ) {
      alert(downSuccess.message);
    }
  }, [ downSuccess ]);

  return (
    <APIkeyForm 
    />
  );
};

export default GetCharaContainer;
