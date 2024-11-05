import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '../reportWebVitals';
import Roteador from './componentes/Routes/roteador';

ReactDOM.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();