import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick'
import ButtonCounter from './components/ButtonCounter'

ReactDOM.render(
  <div>
    {/* Mount Components Here */}
    <ClickityClick />
    <ButtonCounter />
  </div>,
  document.getElementById('root')
);
