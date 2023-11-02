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
      <div className="goldbox">
        <span>
          열심히 했다!
          <span className="total">
            182500
          </span>
        </span>
      </div>
      <CharaList />
    </div>
  );
};

export default Board;