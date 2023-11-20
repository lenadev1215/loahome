import React, { useState } from 'react';
import raids from './../../../datas/static/raids.json';

const raidsName = [
  {name: '오레하 노말', dataName: '오레하', difficulty: 'normal'},
  {name: '오레하 하드', dataName: '오레하', difficulty: 'hard'},
  {name: '아르고스', dataName: '아르고스', difficulty: 'normal'},
  {name: '발탄 노말', dataName: '발탄', difficulty: 'normal'},
  {name: '발탄 하드', dataName: '발탄', difficulty: 'hard'},
  {name: '비아키스 노말', dataName: '비아키스', difficulty: 'normal'},
  {name: '비아키스 하드', dataName: '비아키스', difficulty: 'hard'},
  {name: '쿠크세이튼 노말', dataName: '쿠크세이튼', difficulty: 'normal'},
  {name: '아브렐슈드 노말', dataName: '아브렐슈드', difficulty: 'normal'},
  {name: '아브렐슈드 하드', dataName: '아브렐슈드', difficulty: 'hard'},
  {name: '카양겔 노말', dataName: '카양겔', difficulty: 'normal'},
  {name: '카양겔 하드', dataName: '카양겔', difficulty: 'hard'},
  {name: '일리아칸 노말', dataName: '일리아칸', difficulty: 'normal'},
  {name: '일리아칸 하드', dataName: '일리아칸', difficulty: 'hard'},
  {name: '상아탑 노말', dataName: '상아탑', difficulty: 'normal'},
  {name: '상아탑 하드', dataName: '상아탑', difficulty: 'hard'},
  {name: '카멘 노말', dataName: '카멘', difficulty: 'normal'},
  {name: '카멘 하드', dataName: '카멘', difficulty: 'hard'},
]

const RaidList = ({ charaRaids, onSelect, onDelete, onCheck }) => {
  const [ toggle, setToggle ] = useState(false);

  return (
    <>
      <ul className="raids__list">
        {charaRaids.map((item, i) => (
          <li key={i} className={`${item.completed ? 'completed': ''}`}>
            <span className={`icon ${item.name}`}>
              {item.name}
            </span>
            <span className="level">
              {item.difficulty}
            </span>
            <span className="gold">
              {raids[item.name].difficulty[item.difficulty].gold}G
            </span>

            {/* 수정/삭제 박스 */}
            <div className="update">
              <button type="button" className="btn btn__check" onClick={() => onCheck(item.name)}></button>
              <button type="button" className="btn btn__close" onClick={() => onDelete(item.name)}></button>
            </div>
          </li>
        ))}
        {charaRaids.length < 3 && 
          <li className={`add ${toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>
            <span className="icon__add">
            </span>
            {toggle &&
              <ul className="raids__select custom_scrollbar">
                {raidsName.map((item, i) => (
                  <li key={i} onClick={onSelect} data-name={item.dataName} data-difficulty={item.difficulty}>{item.name}</li>
                ))}
              </ul>
            }
          </li>
        }
      </ul>

      <span className="total_gold">125000</span>
    </>
  );
};

export default RaidList;