import React from 'react';
import ReactDOM from 'react-dom';
import Password from './components/password';

const node = document.querySelector('#root');

ReactDOM.render(<Password upperCase lowerCase special number over6 />, node);
