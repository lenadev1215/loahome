import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIkeyForm from '../components/form/APIkeyForm';

const APIkeyFormContainer = () => {
  const [ key, setKey ] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setKey( value );
  }

  const onSubmit = e => {
    e.preventDefault();

    localStorage.setItem('apiKey', JSON.stringify(key));
  }

  return (
    <APIkeyForm
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default APIkeyFormContainer;
