import React, { useEffect } from 'react';
import APIkeyFormContainer from '../../containers/APIkeyFormContainer';
import GetCharaContainer from '../../containers/GetCharaContainer';
import HomeworkList from './HomeworkList';

const Board = () => {
  // api key check
  useEffect(() => {
    
  }, []);

  return (
    <div className="board">
      {/* <APIkeyFormContainer /> */}
      <GetCharaContainer />
      <div className="board__item"></div>
      <div className="board__item"></div>
    </div>
  );
};

export default Board;