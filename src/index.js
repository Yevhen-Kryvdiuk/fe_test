import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';

import { Provider } from 'react-redux';

import getStore from './store';

ReactDOM.render(
  <Provider store={ getStore() }>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));


