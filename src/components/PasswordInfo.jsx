import React from 'react';
import PropTypes from 'prop-types';

const PasswordInfo = ({ rules }) => (
  <div>
    <h4>Password Strength</h4>
    <ul>
      {rules.map((processedRule) => {
        if (processedRule.isCompleted) {
          return (
            <li key={processedRule.key}>
              <s>{processedRule.rule.message}</s>
            </li>
          );
        }
        return <li key={processedRule.key}>{processedRule.rule.message}</li>;
      })}
    </ul>
  </div>
);

PasswordInfo.propTypes = {
  rules: PropTypes.instanceOf(Array).isRequired,
};

export default PasswordInfo;
