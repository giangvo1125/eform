import { combineReducers } from 'redux';
import shoesReducer from './shoes_reducer';
import shoeReducer from './shoe_reducer';

const rootReducer = combineReducers({
	shoes: shoesReducer,
	shoe: shoeReducer
});

export default rootReducer;