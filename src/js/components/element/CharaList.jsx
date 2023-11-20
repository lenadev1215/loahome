import React from 'react';
import RaidListContainer from '../../containers/RaidListContainer';

const CharaList = ({ localCharaData, toggleApply, onRemove }) => {
  return (
    <div className="chara custom_scrollbar">
      <ul className="chara__list">
        {localCharaData.map((item, i) => (
          <li key={i}>
            <div className="chara__box">
              <div className="chara__info">
                <span className={`job ${item.CharacterClassName}`}>{item.CharacterClassName}</span>
                <strong className="name">{item.CharacterName}</strong>
                <span className="level">
                  {item.ItemMaxLevel} / {item.CharacterLevel}Lev
                </span>
                <span className="server">
                  [{item.ServerName}]
                </span>
              </div>
              <div className="chara__raids">
                <RaidListContainer charaName={item.CharacterName} charaRaids={item.raids} />
              </div>
            </div>

            <div className="btn_box">
              <button type="button" className="btn btn__close" onClick={() => onRemove(item.CharacterName)}></button>
              <button type="button" className="btn btn__move"></button>
            </div>
          </li>
        ))}
        <li className="add_box" onClick={toggleApply}>
          <span className="icon__add"></span>
        </li>
      </ul>
    </div>
  );
};

export default CharaList;