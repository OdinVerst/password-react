import React from 'react';

const PasswordVisibility = props => {
  return (
    <label className="form-control">
      <input
        className=""
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span style={{ marginLeft: '10px' }}>Show password</span>
    </label>
  );
};

export default PasswordVisibility;
