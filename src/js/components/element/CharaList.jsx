import React from 'react';
import { useSelector } from 'react-redux';

const CharaList = () => {
  const { success } = useSelector(({ chara }) => ({
    success: chara.success,
  }));

  return (
    <div className="chara">
      <ul className="chara__list">
        {/* <li>
          <div className="chara__box">
            <div className="chara__info">
              <span className="job 서머너">서머너</span>
              <strong className="name">놀자에여</strong>
              <span className="level">
                1580.85 / 60Lev
              </span>
              <span className="server">
                [실리안]
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
        <li>
          <div className="chara__box">
            <div className="chara__info">
              <span className="job 서머너">서머너</span>
              <strong className="name">놀자에여</strong>
              <span className="level">
                1580.85 / 60Lev
              </span>
              <span className="server">
                [실리안]
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
        <li>
          <div className="chara__box">
            <div className="chara__info">
              <span className="job 서머너">서머너</span>
              <strong className="name">놀자에여</strong>
              <span className="level">
                1580.85 / 60Lev
              </span>
              <span className="server">
                [실리안]
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
        </li> */}
        <li className="add_box">
          <span className="icon__add"></span>
        </li>
      </ul>
    </div>
  );
};

export default CharaList;