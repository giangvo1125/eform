import {LOAD_LIST_SHOES} from './types';
import DataShoes from '../data/shoes';

export function loadListShoes(){
	return (dispatch) => {
		setTimeout(()=>{
			dispatch({type: LOAD_LIST_SHOES, payload: DataShoes});
		}, 400)
	};
};