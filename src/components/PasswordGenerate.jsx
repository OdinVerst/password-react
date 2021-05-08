import React from 'react';
import PropTypes from 'prop-types';

const PasswordGenerate = ({ onClick, children }) => (
  <button onClick={onClick} className="btn generate-btn" type="button">
    {children}
  </button>
);

PasswordGenerate.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PasswordGenerate;
