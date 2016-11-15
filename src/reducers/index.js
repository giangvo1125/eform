import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import themeReducer from './theme_reducer';

const rootReducer = combineReducers({
	form,
	theme: themeReducer
});

export default rootReducer;
