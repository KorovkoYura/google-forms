import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forms from './containers/Forms'
import FormEditor from './containers/FormEditor'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, push } from 'react-router-redux'

import { Provider } from 'react-redux'
import store from './store'
window.store = store
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/forms" component={Forms} />
        <Route path="/forms/edit/:id" component={FormEditor} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
