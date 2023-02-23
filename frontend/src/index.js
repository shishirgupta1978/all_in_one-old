import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './api/store';
import App from './Routes';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
import 'bootstrap/dist/js/bootstrap.bundle';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
