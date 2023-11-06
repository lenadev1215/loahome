import React from 'react';

const SetCharaForm = ({ charaData, selected, onSelect, onSubmit }) => {

  return (
    <div className="form chara_form">
      <h2 className="title">어떤 캐릭터들을 추가하고 싶으신가요?</h2>

      <form onSubmit={onSubmit}>
        <div className="chara__select custom_scrollbar">
          <ul className="chara__list">
            {charaData && charaData.map((item, i) => {
              return (
              <li className={selected.filter(select => select.CharacterName === item.CharacterName).length > 0 ? 'selected' : ''} key={i} onClick={() => onSelect(i)}>
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
                </div>
              </li>
            )})}
          </ul>
        </div>
        <button 
          type="submit" 
          className="btn btn__submit"
        >
          추가
        </button>
      </form>
    </div>
  );
};

export default SetCharaForm;