import React from 'react';
import PropTypes from 'prop-types';

const PasswordVisibility = ({ checked, onChange }) => {
  return (
    <label htmlFor="visible" className="form-control">
      <input
        className=""
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="visible"
      />
      <span style={{ marginLeft: '10px' }}>Show password</span>
    </label>
  );
};

PasswordVisibility.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PasswordVisibility;
