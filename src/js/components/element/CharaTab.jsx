import React, { useState, useEffect } from 'react';
import CharaTabItem from './CharaTabItem';

const CharaTab = () => {
  const onClick = () => {

  }

  return (
    <div className="tab">
      <ul className="tab__item">
        <CharaTabItem />
        <li className="item add">
          <div className="box">
            <button type="button" className="icon__add">
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CharaTab;