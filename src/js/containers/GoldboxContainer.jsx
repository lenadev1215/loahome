import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalGold } from '../../store/chara';
import { memoizedLocalCharaData } from '../../store/selector/chara';

const GoldboxContainer = () => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);
  const { totalGold } = useSelector(({ chara }) => ({
    totalGold: chara.totalGold,
  }));

  // 총 완료 골드 계산
  const totalGoldCalc = () => {
    const completedRaid = localCharaData.filter(chara => {
      return chara.raids.filter(raid => raid.completed === true);
    });

    console.log(completedRaid);

    const getTotalGold = completedRaid.reduce((total, chara) => {
      return total + chara.raids.reduce((raidTotal, raid) => {
        return raid.completed ? raidTotal + parseInt(raid.gold) : raidTotal;
      }, 0);
    }, 0);

    return getTotalGold;
  }

  useEffect(() => {
    dispatch(setTotalGold(totalGoldCalc()));
  }, [ localCharaData ]);
  
  return (
    <div className="goldbox">
      <span>
        열심히 했다!
        <span className="total">
          {totalGold}
        </span>
      </span>
    </div>
  );
};

export default GoldboxContainer;