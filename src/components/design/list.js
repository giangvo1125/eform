import React, {Component} from 'react';
import * as ShoesActions from '../../actions/shoes';
import * as ShoeActions from '../../actions/shoe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {SERVER_URL} from '../../config/main';

class DesignList extends Component{
	componentWillMount(){
		this.props.loadListShoes();
	}
	_onClickShoe(shoe){
		browserHistory.push('/design/detail');
		this.props.clickDetailShoe(shoe);
	}	
	render(){
		return (
			<div id="start-menu">
				<div id="shoe-selection">
					<h1 style={{margin: '0 0 .5em'}}>Choose a style to start designing</h1>
					{
						this.props.shoes.map((shoe)=> {
							let images = `${SERVER_URL}/images/${shoe.folder}/1.jpg`;
							return (
								<a className="start-shoe" key={shoe.id} onClick={this._onClickShoe.bind(this, shoe)}>
									<img width="220" height="260" src={images}/>
									<span className="text-link">
										{shoe.name}
									</span>
								</a>
							)
						})
					}
				</div>
			</div>
		);
	};
};

function mapStateToProps(state){
	return {shoes: state.shoes.list, shoe: state.shoe}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		...ShoesActions, ...ShoeActions
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignList);