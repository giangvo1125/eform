import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import RequireAuth from './hoc/require_auth';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token){
	//update application state
	store.dispatch({type: AUTH_USER});
}

const Feature = () => {
	return <div>Feature</div>
}

ReactDOM.render(
  <Provider store={store}>
 	<Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<Route path="signin" component={Signin}/>
  			<Route path="signout" component={Signout}/>
  			<Route path="feature" component={RequireAuth(Feature)}/>
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'));