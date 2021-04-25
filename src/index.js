import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/scss/main.scss";
import "./styles/css/tailwind.css";

import { InventarioApp } from './InventarioApp';

ReactDOM.render(
  <React.StrictMode>
    <InventarioApp />
  </React.StrictMode>,
  document.getElementById('root')
);
