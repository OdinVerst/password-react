import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ visible, name, value, onChange }) => {
  return (
    <input
      className="form-control"
      type={visible ? 'text' : 'password'}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

PasswordInput.propTypes = {
  visible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PasswordInput;
