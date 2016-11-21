import React, { Component } from 'react';
import CommentLine from './comment_line';
import CommentBox from './comment_box';
class RunApp extends Component {
	render() {
		// var query = firebase.database().ref('users/XbouZJ25PqRmoZ1aBNk4o1vUe5u1').set({
		//     userName: '6575677'
		// });
		let myFirebase = new Firebase('https://master-plane-150203.firebaseio.com/');
		myFirebase.set('Test' + " says: " + 'ok');
		return(
			<div>
				<CommentLine/>
				<CommentBox/>
			</div>
		)
	}
}

export default RunApp;