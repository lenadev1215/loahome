import React from 'react';
import APIkeyFormContainer from '../../containers/APIkeyFormContainer';
import HomeworkList from './HomeworkList';

const Board = () => {
  return (
    <div className="board">
      <APIkeyFormContainer i={0} />
      <div className="board__item"></div>
      <div className="board__item"></div>
    </div>
  );
};

export default Board;