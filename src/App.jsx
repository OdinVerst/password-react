import React from 'react';
import ReactDOM from 'react-dom';
import Password from './components/password';

const node = document.querySelector('#root');

ReactDOM.render(
  <Password
    upperCase={true}
    lowerCase={true}
    special={true}
    number={true}
    over6={true}
  />,
  node
);
