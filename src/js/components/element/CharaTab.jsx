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
          <button type="button">놀자에여</button>
        </li>
        <li className="item">
          <button type="button">순무선생</button>
        </li>
      </ul>
    </div>
  );
};

export default CharaTab;