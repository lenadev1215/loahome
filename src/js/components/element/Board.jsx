import React, { useState, useEffect } from 'react';
import CloseBtn from '../button/CloseBtn';
import GetCharaContainer from '../../containers/GetCharaContainer';
import SetCharaContainer from '../../containers/SetCharaContainer';
import CharaListContainer from '../../containers/CharaListContainer';

const Board = () => {
  const [ apply, setApply ] = useState(false);
  const [ more, setMore ] = useState(false);
  
  // 캐릭터 추가 팝업 toggle
  const toggleApply = () => {
    setApply(!apply);
  }

  // 추가 캐릭터 선택 팝업 toggle
  const toggleMore = () => {
    setMore(!more);
    setApply(false);
  }

  return (
    <div className="board">
      {/* 메인 */}
      {!apply && !more &&
        <>
          <div className="goldbox">
            <span>
              열심히 했다!
              <span className="total">
                0
              </span>
            </span>
          </div>
          <CharaListContainer
            toggleApply={toggleApply}
          />
        </>
      }

      {/* 캐릭터 추가 화면 */}
      {apply &&
        <>
          <CloseBtn 
            onClick={toggleApply}
          />
          <GetCharaContainer 
            toggleMore={toggleMore}
          />
        </>
      }

      {/* 추가 캐릭터 선택 화면 */}
      {more &&
        <>
          <CloseBtn 
            onClick={toggleMore}
          />
          <SetCharaContainer 
            toggleMore={toggleMore}
          />
        </>
      }
    </div>
  );
};

export default Board;