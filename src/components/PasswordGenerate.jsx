import React from 'react';

const PasswordGenerate = props => {
  return (
    <button onClick={props.onClick} className="btn generate-btn" type="button">
      {props.children}
    </button>
  );
};

export default PasswordGenerate;
