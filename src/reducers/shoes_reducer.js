import {LOAD_LIST_SHOES} from '../actions/types';

const INITIAL_STATE = {list: []};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case LOAD_LIST_SHOES:
			return {...state, list: action.payload};
	}
	return state;
}
