import React, { useState, useEffect } from 'react';
import CharaTabItem from './CharaTabItem';

const CharaTab = ({ onSelect, onNewTab, onSubmit, onDelete, charaData, currentIndex }) => {
  return (
    <div className="tab">
      <ul className="tab__item">
        {charaData && charaData.map((item, i) => (
          <CharaTabItem onSelect={onSelect} onSubmit={onSubmit} onDelete={onDelete} name={item.name} key={i} index={i} currentIndex={currentIndex} />
        ))}
        {charaData && charaData.length < 7 &&
          <li className="item add">
            <div className="box">
              <button type="button" onClick={onNewTab}>
                <span className="icon__add"></span>
              </button>
            </div>
          </li>
        }
      </ul>
    </div>
  );
};

export default CharaTab;