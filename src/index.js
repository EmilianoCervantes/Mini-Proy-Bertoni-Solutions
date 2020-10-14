import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Proveedor as ElementosProveedor } from './components/context/ElementosContexto';

ReactDOM.render(
  <ElementosProveedor>
    <App />
  </ElementosProveedor>,
  document.getElementById('root'));