import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import loggerMiddleware from './middlewares/logger';

import App from './components/app';
import RequireAuth from './hoc/require_auth';
import RequireDemo from './hoc/require_demo';
import RunApp from './components/auth/runapp';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const createStoreWithMiddleware = applyMiddleware(reduxThunk, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token){
	//update application state
	store.dispatch({type: AUTH_USER});
}

const Feature = () => {
	return <div>Feature</div>
}

// let configFirebase = {
//     apiKey: "AIzaSyDJ58TfQp6RoZ_y0LXvL2NwZRx61PD2HKo",
//     authDomain: "testproject-fbde9.firebaseapp.com",
//     databaseURL: "https://testproject-fbde9.firebaseio.com",
//     storageBucket: "testproject-fbde9.appspot.com",
//     messagingSenderId: "920154857875"
// };
// const defaultApp = firebase.initializeApp(configFirebase);
// // console.log(defaultApp.database());
// let userUID = 'XbouZJ25PqRmoZ1aBNk4o1vUe5u1';
// firebase.database().ref('/users/' + userUID).once('value')
// .then((snapshot)=> {
//     console.log('snapshot ',snapshot.val())
// })





ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="app" component={RunApp} />
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container')
)
