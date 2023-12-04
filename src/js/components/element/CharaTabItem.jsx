import React, { useState } from 'react';

const CharaTabItem = ({ onSelect, name, index, currentIndex }) => {
  const [ toggle, setToggle ] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setToggle(false);
  }

  return (
    <li className={`item ${currentIndex === index ? 'active' : ''}`}>
      <div className="box">
        {toggle ?
          <form onSubmit={onSubmit}>
            <input type="text" className="input__tabname" placeholder="입력 후 엔터로 저장" autoFocus />
            <input type="submit" className="blind" />
          </form>
          :
          <button type="button" className="name" onClick={() => onSelect(index)} onDoubleClick={() => setToggle(true)}>{name}</button>
        }
      </div>
    </li>
  );
};

export default CharaTabItem;