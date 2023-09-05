import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProveedorTema} from './contextos/ContextoTema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorTema>
      <App />
    </ProveedorTema>
  </React.StrictMode>
);
