import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';//bind multi actions file
import * as listActions from '../../actions/list';
import * as statusActions from '../../actions/status';

class CommentBox extends Component {
	_onAdd() {
		let message = this.refs.comment.value;
		let array_comment = this.props.array_list;
		this.props.addNewCommentAction( array_comment, message, this.props.previous);
		this.refs.comment.value = '';
	}
	_onChangeComment() {
		this.props.changeContentAction(this.refs.comment.value);
	}
	_onUndo() {
		
	}
	render() {
		return(
			<div>
				<textarea row={3} ref="comment" onChange={this._onChangeComment.bind(this)}/>
				<button 
					onClick={this._onAdd.bind(this)}>
					Comment
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		array_list: state.list.array_list,
		previous: state.status.previous,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		...listActions,
		...statusActions,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);