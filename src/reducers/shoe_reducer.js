import {CLICK_DETAIL_SHOE} from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case CLICK_DETAIL_SHOE:
			return {...state, ...action.payload};
	}
	return state;
}