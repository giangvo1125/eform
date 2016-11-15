import {OPEN_BODY_LOGIN} from '../actions/types';

const INITIAL_STATE = {bodyLogin: false};

export default function(state = {}, action){
	switch(action.type){
		case OPEN_BODY_LOGIN:
			return {...state, bodyLogin: action.payload}
	}
	return state;
}