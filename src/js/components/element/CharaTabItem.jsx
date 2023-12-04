import React, { useState, useEffect } from 'react';

const CharaTabItem = ({ onSelect, onSubmit, onDelete, name, index, currentIndex }) => {
  const [ toggle, setToggle ] = useState(false);
  const [ editName, setEditName ] = useState(name);

  // 다른 탭 변경하거나, 이름 변경시 false
  useEffect(() => {
    setToggle(false);
  }, [ currentIndex, name ]);

  const onChange = e => {
    const { value } = e.target;
    setEditName(value);
  }

  return (
    <li className={`item ${currentIndex === index ? 'active' : ''}`}>
      <div className="box">
        {toggle ?
          <form onSubmit={e => onSubmit(editName, e)}>
            <input type="text" onChange={onChange} className="input__tabname" placeholder="입력 후 엔터로 저장" autoFocus />
            <input type="submit" className="blind" />
          </form>
          :
          <div className="name" onClick={() => onSelect(index)} onDoubleClick={() => setToggle(true)}>
            <span>{name}</span>
            <button type="button" onClick={() => onDelete(index)} className="btn__close"></button>
          </div>
        }
      </div>
    </li>
  );
};

export default CharaTabItem;