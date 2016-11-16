import React, { Component } from 'react';

export default class App extends Component {
	componentDidMount(){

	}
  	render() {
	    return (
			<div id="body-main" className="body-main--sticky-top-menu-enabled">
				<div id="top-menu--website" className="top-menu top-menu--unexpanded">
					<div className="top-menu__content">
						<ul className="top-menu__links">
							<li className="top-menu__links__item">
								<a href="" className="top-menu__links__item__link">
									<span className="top-menu__links__item__link__text">CUSTOMIZE</span>
								</a>
							</li>
							<li className="top-menu__links__item">
								<a href="" className="top-menu__links__item__link">
									<span className="top-menu__links__item__link__text">CREATE</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				{this.props.children}
			</div>
	    );
  	}
}