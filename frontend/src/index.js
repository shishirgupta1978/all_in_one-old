import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './components/common';
import { Provider } from 'react-redux';
import { store } from './api/store';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/styles/index.scss';


createRoot(document.getElementById('root')).render(<Provider store={store}><Routes /></Provider>);