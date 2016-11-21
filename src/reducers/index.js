import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import AppReducer from './app_reducer';
import ListReducer from './list_reducer';
import StatusReducer from './status_reducer';

const rootReducer = combineReducers({
	// app: AppReducer,
	list: ListReducer,
	status: StatusReducer,
});

export default rootReducer;
