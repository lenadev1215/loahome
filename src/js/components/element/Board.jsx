import React, { useEffect } from 'react';
import APIkeyFormContainer from '../../containers/APIkeyFormContainer';
import GetCharaContainer from '../../containers/GetCharaContainer';
import CharaList from './CharaList';
import HomeworkList from './HomeworkList';

const Board = () => {
  // api key check
  useEffect(() => {
    
  }, []);

  return (
    <div className="board">
      {/* <APIkeyFormContainer /> */}
      {/* <GetCharaContainer /> */}
      <CharaList />
    </div>
  );
};

export default Board;