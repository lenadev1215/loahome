import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Common from '../components/layout/template/Common';
import CharaTab from '../components/element/CharaTab';
import Board from '../components/element/Board';
import { getLocalKey } from '../../store/common';

const Main = () => {
  const pageName = '숙제합시다';
  const dispatch = useDispatch();

  return (
    <Common title={pageName}>
      <CharaTab />
      <Board />
    </Common>
  );
};

export default Main;