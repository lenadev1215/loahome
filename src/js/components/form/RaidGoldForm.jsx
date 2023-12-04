import React, { useState, useEffect } from 'react';

const RaidGoldForm = ({ onSubmit, gold, index }) => {
  const [ toggle, setToggle ] = useState(false);
  const [ editGold, setEditGold ] = useState(gold);

  const onChange = e => {
    const { value } = e.target;
    setEditGold(value);
  }
  
  // 값 변경시 input hidden
  useEffect(() => {
    setToggle(false);
  }, [ gold ]);

  return (
    <>
      {toggle ?
        <form onSubmit={e => onSubmit(editGold, index, e)}>
          <input type="text" className="input__gold" onChange={onChange} autoFocus />
          <input type="submit" className="blind" />
        </form>
        :
        <strong onDoubleClick={() => setToggle(true)}>{gold}</strong>
      }
    </>
  );
};

export default RaidGoldForm;