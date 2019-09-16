import React from 'react';

const PasswordInfo = props => {
  console.log(props);
  return (
    <div>
      <h4>Password Strength</h4>
      <ul>
        {props.rules.map(processedRule => {
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
};

export default PasswordInfo;
