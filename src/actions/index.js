import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';
import {browserHistory} from 'react-router';

export function signinUser({email, password}){
	return function(dispatch){
		setTimeout(()=>{
			dispatch({type: AUTH_USER, payload: 'success'});
			if(email !== 'buivuong@gmail.com')
				dispatch(authError('Bad Login Info'));
			else
				localStorage.setItem('token', '123');
			browserHistory.push('/feature');
		}, 500)
	}
}

export function authError(error){
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser(){
	localStorage.removeItem('token');
	return {
		type: UNAUTH_USER
	}
}