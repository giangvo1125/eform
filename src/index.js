import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import RequireAuth from './hoc/require_auth';
import reducers from './reducers';

import loggerMiddleware from './middlewares/logger';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token){
	//update application state
	store.dispatch({type: AUTH_USER});
}

import DesignList from './components/design/list';
import DesignDetail from './components/design/detail';

ReactDOM.render(
  <Provider store={store}>
 	  <Router history={browserHistory}>
  		<Route path="/" component={App}>
        <Route path="design/list" component={DesignList}/>
        <Route path="design/detail" component={DesignDetail}/>
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'));