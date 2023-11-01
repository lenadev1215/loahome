import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Common from '../components/layout/template/Common';
import APIkeyFormContainer from '../containers/APIkeyFormContainer';
import GetCharaContainer from '../containers/GetCharaContainer';

const Main = () => {
  const pageName = '숙제합시다';
  const dispatch = useDispatch();

  return (
    <Common title={pageName}>
      <div className="wrapper">
        <APIkeyFormContainer i={0} />
        <GetCharaContainer />
      </div>
    </Common>
  );
};

export default Main;