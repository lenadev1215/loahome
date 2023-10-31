import React from 'react';

const PopupLayout = ({ name, children, onClose }) => {
  return (
    <div className={`popup__wrap ${name}`}>
      <div className="popup__layer" onClick={onClose}></div>
      <div className="popup__box">
        { children }
      </div>
    </div>
  );
};

export default PopupLayout;