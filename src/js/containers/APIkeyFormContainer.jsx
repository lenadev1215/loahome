import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIkeyForm from '../components/form/APIkeyForm';

const APIkeyFormContainer = ({ i }) => {
  const [ key, setKey ] = useState('');
  const [ keyInit, setKeyInit ] = useState([]);

  // keyInit 초기화
  useEffect(() => {
    const k = localStorage.getItem('apiKey');

    if ( Array.isArray(k) ) {
      setKeyInit(JSON.parse(k));
    } else {
      setKeyInit([]);
    }
  }, []);

  useEffect(() => {
    console.log(key);
  }, [ key ])

  const onChange = e => {
    const { value } = e.target;
    setKey( value );
  }

  const onSubmit = e => {
    e.preventDefault();
    
    keyInit[i] = key;
    localStorage.setItem('apiKey', JSON.stringify(keyInit));
  }

  return (
    <APIkeyForm
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default APIkeyFormContainer;
