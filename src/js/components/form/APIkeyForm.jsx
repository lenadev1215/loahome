import React from 'react';

const APIkeyForm = ({ onChange, onSubmit }) => {
  return (
    <div className="form api_form">
      <form onSubmit={onSubmit}>
        <input type="text" className="input__text key" placeholder="로스트아크 API KEY를 입력해주세요." onChange={onChange} />
        <button 
          type="submit" 
          className="btn btn__submit"
        >로그인
        </button>
      </form>
    </div>
  );
};

export default APIkeyForm;