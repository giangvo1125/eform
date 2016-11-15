import {OPEN_BODY_LOGIN} from './types';

export function openBodyLogin(){
	$('body').addClass('page-login layout-full page-dark');
	return {
		type: OPEN_BODY_LOGIN,
		payload: true
	}
};