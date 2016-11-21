import * as typeActions from './types';
import {browserHistory} from 'react-router';

export function handleCommentAction(status, current, array_comment, comment) {
	return (dispatch) => {
		if(status == typeActions.ADD_COMMENT_ACTION) {
			array_comment.push({
				id: Math.random(),
				comment: comment
			});
			let obj = {
				comment : comment,
				array_comment : array_comment,
				status: typeActions.ADD_COMMENT_ACTION,

			}
			dispatch({
				type: typeActions.ADD_COMMENT_ACTION,
				payload: obj
			})
		}
		else if(status == typeActions.EDIT_COMMENT_ACTION) {
			let indexItem = -1;
			array_comment.map((item, index) => {
				if(item.id === current.id) {
					indexItem = index;
				}
			});
			if(indexItem != -1) {
				array_comment[indexItem].comment = comment;
			}
			let obj = {
				comment : comment,
				array_comment : array_comment,
				status: typeActions.EDIT_COMMENT_ACTION,
				current: array_comment[indexItem],
			}
			dispatch({
				type: typeActions.EDIT_COMMENT_ACTION,
				payload: obj
			})
		}
	}
}

export function clickRowCommentAction(row) {
	return {
		type: typeActions.CLICK_ROW_COMMENT_ACTION,
		payload: row,
	}
}

export function changeStatusAction(status) {
	return (dispatch) => {
		if(status == 'edit') {
			dispatch({
				type: typeActions.CHANGE_STATUS_ACTION,
				payload: typeActions.EDIT_COMMENT_ACTION,
			})
		}
		else if(status == 'add') {
			dispatch({
				type: typeActions.CHANGE_STATUS_ACTION,
				payload: typeActions.ADD_COMMENT_ACTION,
			})
		}
	}
}

export function addCommentAction(array_comment, comment) {
	return (dispatch) => {
		array_comment.push({
			id: Math.random(),
			comment: comment
		});
		let obj = {
			comment : comment,
			array_comment : array_comment,
			status: typeActions.ADD_COMMENT_ACTION,

		}
		dispatch({
			type: typeActions.ADD_COMMENT_ACTION,
			payload: obj
		})
	}
}

export function editCommentAction(array_comment, comment, current) {
	return (dispatch) => {
		let indexItem = -1, preItem = {};
		array_comment.map((item, index) => {
			if(item.id === current.id) {
				indexItem = index;
			}
		});
		if(indexItem != -1) {
			// preItem.item = array_comment[indexItem];
			preItem.item = JSON.parse(JSON.stringify(array_comment[indexItem]));
			preItem.index = indexItem;
			array_comment[indexItem].comment = comment;
		}
		let obj = {
			comment : comment,
			array_comment : array_comment,
			status: typeActions.EDIT_COMMENT_ACTION,
			current: array_comment[indexItem],
			previous: preItem
		}
		dispatch({
			type: typeActions.EDIT_COMMENT_ACTION,
			payload: obj
		})
	}
}

export function changeCommentAction(message) {
	return {
		type: typeActions.CHANGE_CONTENT_COMMENT_ACTION,
		payload: message,
	}
}

export function deleteCommentAction(array_comment, comment, current) {
	return (dispatch) => {
		// array.splice(index, 1);
		let indexItem = -1, preItem = {};
		array_comment.map((item, index) => {
			if(item.id === current.id) {
				indexItem = index;
			}
		});
		if(indexItem != -1) {
			preItem.item = array_comment[indexItem];
			preItem.index = indexItem;
			// array_comment[indexItem].comment = comment;
			array_comment.splice(indexItem, 1);
		}
		let obj = {
			comment : comment,
			array_comment : array_comment,
			status: typeActions.DELETE_COMMENT_ACTION,
			current: array_comment[indexItem],
			previous: preItem
		}
		dispatch({
			type: typeActions.DELETE_COMMENT_ACTION,
			payload: obj
		})
	}
}
// UNDO_COMMENT_ACTION
export function undoCommentAction() {
	return (dispatch) => {
		dispatch({
			type: typeActions.UNDO_COMMENT_ACTION,
			payload: ''
		})
	}
}