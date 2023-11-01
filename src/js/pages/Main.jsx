import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Common from '../components/layout/template/Common';
import CharaTab from '../components/element/CharaTab';
import Board from '../components/element/Board';
import GetCharaContainer from '../containers/GetCharaContainer';
import { getLocalKey } from '../../store/common';

const Main = () => {
  const pageName = '숙제합시다';
  const dispatch = useDispatch();
  const { key } = useSelector(({ common }) => ({
    key: common.key
  }));

  useEffect(() => {
    const key = localStorage.getItem('apiKey');
    getLocalKey({ key });
  }, []);

  return (
    <Common title={pageName}>
      <CharaTab />
      {/* <GetCharaContainer /> */}
      <Board />
    </Common>
  );
};

export default Main;