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
      Show password
    </label>
  );
};

export default PasswordVisibility;
