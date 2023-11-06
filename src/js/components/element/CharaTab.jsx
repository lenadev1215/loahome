import React, { useState, useEffect } from 'react';

const CharaTab = () => {
  const [ item, setItem ] = useState([]);
  useEffect(() => {
    setItem(localStorage.getItem('apiKey'));
  }, []);

  const onClick = () => {

  }

  return (
    <div className="tab">
      <ul className="tab__item">
        <li className="item">
          <button type="button" className="active">Chara01</button>
        </li>
        <li className="item">
          <button type="button">Chara02</button>
        </li>
      </ul>
    </div>
  );
};

export default CharaTab;