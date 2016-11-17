import React, {Component} from 'react';
import * as ShoeActions from '../../actions/shoe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


class Detail extends Component{
	render(){
		return (
			<div id="shoe-configurator">
				<div className="shoe-configurator">
					<div className="configurator-menu configurator-menu--shifted" style={{paddingTop: '0px'}}>
						<ul className="configurator-menu__summary-list  configurator-menu__summary-list--sticky">
							<li className="clickable menu-item menu-item-size panel-heading color-extralight">
								<span>
									<span className="icon-text menu-item__text">
										Size
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading color-extralight">
								<span>
									<span className="icon-text menu-item__text">
										Style
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading color-extralight">
								<span>
									<span className="icon-text menu-item__text">
										Heel Types
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading">
								<span>
									<span className="icon-text menu-item__text">
										Embellishments
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading color-extralight">
								<span>
									<span className="icon-text menu-item__text">
										Good To Know
									</span>
								</span>
							</li>
						</ul>
						<div className="configurator-menu__menu-areas-window" style={{minHeight: '888px'}}>
							<div className="configurator-menu__menu-area primary-menu-area">
								<div className="menu-section size-menu menu-section--selected" style={{height: 'initial'}}>
									<h2 className="menu-section__header panel-heading">
										<span>
											<span className="icon-text">PICK YOUR SIZE</span>
										</span>
									</h2>
									<div className="spacer" style={{height: '0px'}}></div>
									<div className="size-menu__picker">
										<div className="sop-select size-select">
											<select>
												<option value="Size" disabled></option>
												<option value="2">US 2 / EU 31 -31.5</option>
												<option value="2.5">US 2.5 / EU 32</option>
											</select>
										</div>
										<div className="sop-select width-select">
											<select>
												<option value="Width" disabled></option>
												<option value="N">Narrow</option>
												<option value="S">Standard</option>
												<option value="S">Standard</option>
											</select>
										</div>
									</div>
								</div>
								<div className="menu-section menu-section top-add-to-bag">
									<div className="spacer" style={{height: 0}}/>
									<div className="add-to-bag-section-content">
										<button className="button button--four button--add-to-bag button--full-width">
											<span className="button--add-to-bag__label">Add To Bag</span>
											<span className="button--add-to-bag__price">$179</span>
										</button>
									</div>
									<div className="spacer" style={{height: 0}}/>
								</div>
							</div>
						</div>
					</div>
				</div>
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