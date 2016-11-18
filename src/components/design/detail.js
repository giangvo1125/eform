import React, {Component} from 'react';
import * as ShoeActions from '../../actions/shoe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


class Detail extends Component{
	constructor(){
		super();
		this.menus = [
			'size-menu',
			'style-menu',
			'heel-menu',
			'embel-menu'
		];
		this.list = [
			'shoe-size',
			'shoe-style',
			'shoe-heel',
			'shoe-embel'
		]
	}
	componentDidMount(){
		let self = this;
		$('#size-menu').on('click', function(){
			$('html, body').animate({
		        scrollTop: $("body").offset().top
		    }, 800);
		});

		$('#style-menu').on('click', function(){
			$('html, body').animate({
		        scrollTop: $("#shoe-style-sticky").offset().top
		    }, 800);
		});

		$('#heel-menu').on('click', function(){
			self.menus.map((menu)=>{
				$('#'+menu).addClass('color-extralight');
			});

			$('#heel-menu').removeClass('color-extralight');
		});

		$('#embel-menu').on('click', function(){
			self.menus.map((menu)=>{
				$('#'+menu).addClass('color-extralight');
			});

			$('#embel-menu').removeClass('color-extralight');
		});

		$(document).scroll(function(){
			const scrolled_val = $(document).scrollTop().valueOf();
			if(scrolled_val === 0){
				$('#body-main').removeClass('body-main--with-minified-top-menu');
				$('#top-menu--website').removeClass('top-menu--minified');
			}else{
				$('#body-main').addClass('body-main--with-minified-top-menu');
				$('#top-menu--website').addClass('top-menu--minified');
			}

		});

		$('#shoe-buy-sticky').waypoint({
			handler: function(direction){
				self.menus.map((menu)=>{
					$('#'+menu).addClass('color-extralight');
				});

				$('#size-menu').removeClass('color-extralight');

				if(direction === "down"){
					$('#shoe-buy').addClass('top-add-to-bag--sticky');
					$('#shoe-buy').find('.add-to-bag-section-content').addClass('add-to-bag-section-content--sticky');
					$('#shoe-buy').find('.last').css('height', '68px');
				}else{
					$('#shoe-buy').removeClass('top-add-to-bag--sticky');
					$('#shoe-buy').find('.add-to-bag-section-content').removeClass('add-to-bag-section-content--sticky');
					$('#shoe-buy').find('.last').css('height', '0px');
				}
			}
		});

		$('#shoe-style-sticky').waypoint({
			handler: function(direction){
				self.menus.map((menu)=>{
					$('#'+menu).addClass('color-extralight');
				});

				$('#style-menu').removeClass('color-extralight');
				if(direction === "down"){
					$('#shoe-style').find('.menu-section__header').addClass('menu-section__header--sticky');
					$('#shoe-style').find('.spacer').css('height', '46px');
				}else{
					$('#shoe-style').find('.menu-section__header').removeClass('menu-section__header--sticky');
					$('#shoe-style').find('.spacer').css('height', '0px');
				}
			}
		});

		$('#heel-style-sticky').waypoint({
			handler: function(direction){
				if(direction === "down"){
					$('#heel-style').find('.menu-section__header').addClass('menu-section__header--sticky');
					$('#heel-style').find('.spacer').css('height', '46px');
					$('#shoe-style').find('.menu-section__header').removeClass('menu-section__header--sticky').addClass('menu-section__header--bottomed-out');
				}else{
					$('#heel-style').find('.menu-section__header').removeClass('menu-section__header--sticky');
					$('#heel-style').find('.spacer').css('height', '0px');
				}
			}
		});

	}
	render(){
		return (
			<div id="shoe-configurator">
				<div className="shoe-configurator">
					<div className="configurator-menu configurator-menu--shifted" style={{paddingTop: '0px'}}>
						<ul className="configurator-menu__summary-list  configurator-menu__summary-list--sticky">
							<li className="clickable menu-item menu-item-size panel-heading" id="size-menu">
								<span>
									<span className="icon-text menu-item__text">
										Size
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading color-extralight" id="style-menu">
								<span>
									<span className="icon-text menu-item__text">
										Style
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading color-extralight" id="heel-menu">
								<span>
									<span className="icon-text menu-item__text">
										Heel Types
									</span>
								</span>
							</li>
							<li className="clickable menu-item menu-item-size panel-heading color-extralight" id="embel-menu">
								<span>
									<span className="icon-text menu-item__text">
										Embellishments
									</span>
								</span>
							</li>
						</ul>
						<div className="configurator-menu__menu-areas-window" style={{minHeight: '888px'}}>
							<div className="configurator-menu__menu-area primary-menu-area">
								<div className="menu-section size-menu" style={{height: 'initial'}} id="shoe-size">
									<h2 className="menu-section__header panel-heading">
										<span>
											<span className="icon-text">PICK YOUR SIZE</span>
										</span>
									</h2>
									<div className="spacer" style={{height: '0px'}} id="shoe-buy-sticky"></div>
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
								<div className="menu-section menu-section top-add-to-bag" id="shoe-buy">
									<div className="spacer first" style={{height: 0}} id="shoe-style-sticky"/>
									<div className="add-to-bag-section-content">
										<button className="button button--four button--add-to-bag button--full-width">
											<span className="button--add-to-bag__label">Add To Bag</span>
											<span className="button--add-to-bag__price">$179</span>
										</button>
									</div>
									<div className="spacer last" style={{height: 0}}/>
								</div>
								<div className="menu-section style-menu" style={{height: 'initial'}} id="shoe-style">
									<h2 className="menu-section__header panel-heading">
										<span>
											<span className="icon-text">PICK YOUR STYLE</span>
										</span>
									</h2>
									<div className="spacer" style={{height: 0}} id="heel-type-sticky"/>
									<div className="style-menu-content menu-section__content">
										<div id="style" className="clickable-image-list">
											<label className="clickable-image-list__item wedge clickable-image-list__item--selected clickable">
												<div className="clickable-image-list__item__thumbnail clickable-image-list__item__thumbnail--selected">
													<div className="clickable-image-list__item__thumbnail__icon designer-icon B1"/>
												</div>
												<input type="radio" name="style" value="B1" className="clickable-image-list__item__input"/>
												<p className="clickable-image-list__item__label ui-element-label">
													CLOSED
												</p>
											</label>
											<label className="clickable-image-list__item wedge clickable">
												<div className="clickable-image-list__item__thumbnail">
													<div className="clickable-image-list__item__thumbnail__icon designer-icon B3"/>
												</div>
												<input type="radio" name="style" value="B3" className="clickable-image-list__item__input"/>
												<p className="clickable-image-list__item__label ui-element-label">
													SLINGBACK
												</p>
											</label>
										</div>
									</div>
								</div>

								<div className="menu-section style-menu" style={{height: 'initial'}} id="shoe-heel">
									<h2 className="menu-section__header panel-heading">
										<span>
											<span className="icon-text">HEEL TYPES</span>
										</span>
									</h2>
									<div className="spacer" style={{height: 0}}/>
									<div className="menu-section__content">
										<div className="heel-menu-content">
											<div id="heel-type-options" className="clickable-image-list">
												<label className="clickable-image-list__item clickable-image-list__item--selected clickable">
													<div className="clickable-image-list__item__thumbnail clickable-image-list__item__thumbnail--selected">
														<div className="clickable-image-list__item__thumbnail__icon designer-icon Wedge">
														</div>
													</div>
													<input type="radio" name="heel-type-options" value="Wedge" className="clickable-image-list__item__input"/>
													<p className="clickable-image-list__item__label ui-element-label">WEDGE</p>
												</label>
												<label className="clickable-image-list__item clickable">
													<div className="clickable-image-list__item__thumbnail">
														<div className="clickable-image-list__item__thumbnail__icon designer-icon Stiletto"/>
													</div>
													<input type="radio" name="heel-type-options" value="Stiletto" className="clickable-image-list__item__input"/>
													<p className="clickable-image-list__item__label ui-element-label color-light">STILETTO</p>
												</label>
											</div>
										</div>
									</div>
								</div>

								<div className="menu-section style-menu" style={{height: 'initial'}} id="shoe-embel">
									<h2 className="menu-section__header panel-heading">
										<span>
											<span className="icon-text">EMBELLISHMENTS</span>
										</span>
									</h2>
									<div className="spacer" style={{height: 0}}/>
									<div className="menu-section__content">
										<div className="decoration-menu-content">
											<div id="front-decoration" className="clickable-image-list">
												<label className="clickable-image-list__item clickable-image-list__item--selected clickable">
													<div className="clickable-image-list__item__thumbnail clickable-image-list__item__thumbnail--selected">
														<div className="clickable-image-list__item__thumbnail__icon designer-icon ButterflyBow"/>
													</div>
													<input type="radio" name="front-decoration" value="ButterflyBow" className="clickable-image-list__item__input"/>
													<p className="clickable-image-list__item__label ui-element-label">BUTTERFLY BOW</p>
												</label>
												<label className="clickable-image-list__item clickable">
													<div className="clickable-image-list__item__thumbnail">
														<div className="clickable-image-list__item__thumbnail__icon designer-icon no-value"/>
													</div>
													<input type="radio" name="front-decoration" value="" className="clickable-image-list__item__input"/>
													<p className="clickable-image-list__item__label ui-element-label color-light">NO FRONT DECORATION</p>
												</label>
											</div>
										</div>
									</div>
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