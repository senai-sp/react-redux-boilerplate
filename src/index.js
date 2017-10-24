import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App/index';
import createStore from './store/index';

const store = createStore(window.__INITIAL_STATE__);
const MOUNT_NODE = document.getElementById('root');

if (!__TEST__) {
  ReactDOM.render(
    <App store={store} />,
    MOUNT_NODE,
  );
}
