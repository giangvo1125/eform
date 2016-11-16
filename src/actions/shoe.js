import {CLICK_DETAIL_SHOE} from './types';
import DataShoes from '../data/shoes';
import _ from 'lodash';

export function clickDetailShoe(shoe){
	return (dispatch) => {
		setTimeout(()=>{
			dispatch({type: CLICK_DETAIL_SHOE, payload: shoe});
		}, 400)
	};
};