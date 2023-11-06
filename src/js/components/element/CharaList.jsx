import React from 'react';

const CharaList = ({ toggleApply, localCharaData }) => {
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
                <ul className="raids__list">
                  <li>
                    <span className="icon 발탄">
                      발탄
                    </span>
                    <span className="level">
                      Hard <span className="gold">2500G</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon 비아키스">
                      비아키스
                    </span>
                    <span className="level">
                      Hard <span className="gold">2500G</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon__add">
                    </span>
                  </li>
                </ul>

                <span className="total_gold">125000</span>
              </div>
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