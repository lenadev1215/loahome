import React, { useState, useEffect } from 'react';

const raidsData = [
  {name: '오레하 노말', dataName: '오레하', difficulty: 'normal', minLevel: 1340, gold: 500},
  {name: '오레하 하드', dataName: '오레하', difficulty: 'hard', minLevel: 1370, gold: 600},
  {name: '아르고스', dataName: '아르고스', difficulty: 'normal', minLevel: 1370, gold: 1000},
  {name: '발탄 노말', dataName: '발탄', difficulty: 'normal', minLevel: 1415, gold: 1200},
  {name: '발탄 하드', dataName: '발탄', difficulty: 'hard', minLevel: 1445, gold: 1800},
  {name: '비아키스 노말', dataName: '비아키스', difficulty: 'normal', minLevel: 1430, gold: 1600},
  {name: '비아키스 하드', dataName: '비아키스', difficulty: 'hard', minLevel: 1460, gold: 2400},
  {name: '쿠크세이튼 노말', dataName: '쿠크세이튼', difficulty: 'normal', minLevel: 1475, gold: 3000},
  {name: '아브렐슈드 노말', dataName: '아브렐슈드', difficulty: 'normal', minLevel: 1490, gold: 7000},
  {name: '아브렐슈드 하드', dataName: '아브렐슈드', difficulty: 'hard', minLevel: 1540, gold: 9000},
  {name: '카양겔 노말', dataName: '카양겔', difficulty: 'normal', minLevel: 1540, gold: 4500},
  {name: '카양겔 하드', dataName: '카양겔', difficulty: 'hard', minLevel: 1580, gold: 6500},
  {name: '일리아칸 노말', dataName: '일리아칸', difficulty: 'normal', minLevel: 1580, gold: 7500},
  {name: '일리아칸 하드', dataName: '일리아칸', difficulty: 'hard', minLevel: 1600, gold: 10000},
  {name: '상아탑 노말', dataName: '상아탑', difficulty: 'normal', minLevel: 1600, gold: 9000},
  {name: '상아탑 하드', dataName: '상아탑', difficulty: 'hard', minLevel: 1620, gold: 14500},
  {name: '카멘 노말', dataName: '카멘', difficulty: 'normal', minLevel: 1610, gold: 13000},
  {name: '카멘 하드', dataName: '카멘', difficulty: 'hard', minLevel: 1630, gold: 41000},
]

const RaidList = ({ charaRaids, onSelect, onDelete, onCheck }) => {
  const [ toggle, setToggle ] = useState(false);
  const [ total, setTotal ] = useState(0);

  // 총 골드 set
  useEffect(() => {
    const checkGold = () => {
      let totalGold = 0;

      if ( charaRaids.length > 0 ) {
        // 완료된 항목
        let comp = charaRaids.filter(item => item.completed);

        if ( comp.length > 0 ) {
          comp.map(item => {
            totalGold += parseInt(item.gold);
          });
        }
      }

      return totalGold;
    }

    setTotal(checkGold);
  }, [ charaRaids ]);

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
              {item.gold}G
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
                {raidsData.map((item, i) => (
                  <li key={i} onClick={onSelect} data-name={item.dataName} data-difficulty={item.difficulty} data-gold={item.gold}>{item.name}</li>
                ))}
              </ul>
            }
          </li>
        }
      </ul>

      <span className="total_gold">{total}</span>
    </>
  );
};

export default RaidList;