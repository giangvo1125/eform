import * as typeActions from '../actions/types';

const initState = {
	status: typeActions.ADD_ITEM_ACTION,
	current: null,
	previous: null,
}

export default function(state = initState, action) {
	switch(action.type) {
		case typeActions.SET_STATUS_ACTION:
			return {...state, ...action.payload}
		
	}
	return state;
}