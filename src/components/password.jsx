import React, { useState, useEffect } from 'react';
import passwordGenerator from '../modules/password-generator';
import rules from '../modules/rules';
import PasswordInput from './PasswordInput';
import PasswordGenerate from './PasswordGenerate';
import PasswordInfo from './PasswordInfo';
import PasswordVisibility from './PasswordVisibility';

const Password = props => {
  const [strength, setStrength] = useState({});
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [ok, setOk] = useState(false);

  const checkStrength = () => {
    const strengthLoc = {};
    Object.keys(props).forEach(key => {
      if (props[key] && rules[key].pattern.test(password)) {
        strengthLoc[key] = true;
      }
      setStrength(strengthLoc);
    });
  };

  const onChange = e => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (Object.keys(strength).length === Object.keys(props).length) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [strength]);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const generate = () => {
    setVisible(true);
    setPassword(passwordGenerator());
  };

  useEffect(() => {
    checkStrength({ target: { value: password } });
  }, [password]);

  const processedRules = Object.keys(props).map(key => {
    if (props[key]) {
      return {
        key: key,
        rule: rules[key],
        isCompleted: strength[key] || false
      };
    }
    return false;
  });

  return (
    <div className="well form-group col-md-6">
      <label>Password</label>
      <PasswordInput
        name="password"
        onChange={onChange}
        value={password}
        visible={visible}
      />
      <PasswordVisibility checked={visible} onChange={toggleVisibility} />
      <PasswordInfo rules={processedRules} />
      <PasswordGenerate onClick={generate}>Generate</PasswordGenerate>
      <button
        type="button"
        className={`btn btn-primary  ${ok ? '' : ' disabled'}`}
      >
        Save
      </button>
    </div>
  );
};

export default Password;
