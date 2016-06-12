import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';

import { Provider } from 'react-redux';
import Store from './store.js';


window.React = React;

render(
  (<Provider store={Store}>
  	<Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
  </Provider>), document.getElementById('content')
);
