import React from 'react';

const GetCharaForm = ({ onChange, onSubmit }) => {
  return (
    <div className="form api_form">
      <form onSubmit={onSubmit}>
        <input type="text" className="input__text key" placeholder="캐릭터명을 입력해주세요." onChange={onChange} />
        <button 
          type="submit" 
          className="btn btn__submit"
        >입력
        </button>
      </form>
    </div>
  );
};

export default GetCharaForm;