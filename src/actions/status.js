import * as typeActions from './types';
import {browserHistory} from 'react-router';

export function setStatus(payload) {
	return {
		type: typeActions.SET_STATUS_ACTION,
		payload: payload
	}
}

export function exampleAction() {
	console.log("exampleAction chay")
}