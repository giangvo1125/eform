import React, {Component} from 'react';
import * as ShoeActions from '../../actions/shoe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


class Detail extends Component{
	render(){
		return (
			<div id="shoe-configurator">
							
			</div>
		)
	};
};

function mapStateToProps(state){
	return {shoe: state.shoe}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		...ShoeActions
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);