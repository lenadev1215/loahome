import React, { useState, useEffect } from 'react';
import CharaTabItem from './CharaTabItem';

const CharaTab = ({ onSelect, onNewTab, charaData, currentIndex }) => {
  return (
    <div className="tab">
      <ul className="tab__item">
        {charaData && charaData.map((item, i) => (
          <CharaTabItem onSelect={onSelect} name={item.name} key={i} index={i} currentIndex={currentIndex} />
        ))}
        {charaData && charaData.length < 7 &&
          <li className="item add">
            <div className="box">
              <button type="button" className="icon__add" onClick={onNewTab} />
            </div>
          </li>
        }
      </ul>
    </div>
  );
};

export default CharaTab;