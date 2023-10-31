import React from 'react';
import PopupLayout from './PopupLayout';

const AlertPopup = ({ alert, button, onClose }) => {
  return (
    <PopupLayout name="alert_pop" onClose={onClose}>
      <div className="popup__inner">
        <span className="text">
          {alert}
        </span>
        {button}
      </div>
    </PopupLayout>
  );
};

export default AlertPopup;