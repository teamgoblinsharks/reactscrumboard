import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  root
);
