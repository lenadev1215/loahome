import React from 'react';

const CloseBtn = ({ onClick }) => {
  return (
    <button
      className="btn btn__close"
      onClick={onClick}
    ></button>
  );
};

export default CloseBtn;