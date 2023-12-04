import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChara, setTotalGold } from '../../store/chara';
import { memoizedTotalGold, memoizedLocalCharaData } from '../../store/selector/chara';

const GoldboxContainer = () => {
  const dispatch = useDispatch();
  const localCharaData = useSelector(memoizedLocalCharaData);
  const totalGold = useSelector(memoizedTotalGold)

  // 총 완료 골드 계산
  const totalGoldCalc = () => {
    const completedRaid = localCharaData.filter(chara => {
      return chara.raids.filter(raid => raid.completed === true);
    });

    const getTotalGold = completedRaid.reduce((total, chara) => {
      return total + chara.raids.reduce((raidTotal, raid) => {
        return raid.completed ? raidTotal + parseInt(raid.gold) : raidTotal;
      }, 0);
    }, 0);

    return getTotalGold;
  }

  // 초기화
  const onInit = () => {
    const initChara = [...localCharaData];

    initChara.forEach(chara => {
      chara.raids.forEach(raid => {
        raid.completed = false;
      });
    });

    dispatch(setChara(initChara));
    window.location.reload();
  }

  useEffect(() => {
    dispatch(setTotalGold(totalGoldCalc()));
  }, [ localCharaData ]);
  
  return (
    <div className="board__top">
      <button type="button" className="btn btn__reload" onClick={onInit}></button>

      <div className="goldbox">
        <span>
          열심히 했다!
          <span className="total">
            {totalGold}
          </span>
        </span>
      </div>
    </div>
  );
};

export default GoldboxContainer;