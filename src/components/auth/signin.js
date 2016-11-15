import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as ThemeActions from '../../actions/theme';
import {bindActionCreators} from 'redux';

class Signin extends Component{
	componentDidMount(){
		this.props.openBodyLogin();
	}

	handleFormSubmit({email, password}){
		//this.props.openBodyLogin();
	}

	renderAlert(){
		if(this.props.errorMessage){
			return (
				<div className="alert alert-danger">
					<strong>Opps</strong>
				</div>
			);
		}
	}

	render(){
		const { handleSubmit, fields: {email, password} } = this.props;

		return (
			<div className="page animsition vertical-align text-center" data-animsition-in="fade-in"
  				data-animsition-out="fade-out">
  				<div className="page-content vertical-align-middle">
  					<div className="brand">
  						<img className="brand-img" src="http://getbootstrapadmin.com/remark/topbar/assets/images/logo.png"/>
  						<h2 className="brand-text">Remark</h2>
  					</div>
  					<p>Sign into your pages account</p>
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<div className="form-group">
							<label className="sr-only" htmlFor="email">Email</label>
							<input {...email} className="form-control" type="email" placeholder="Email" id="email"/>
						</div>
						<div className="form-group">
							<label className="sr-only" htmlFor="password">Password:</label>
							<input {...password} className="form-control" id="password"/>
						</div>
						{this.renderAlert()}
						<button action="submit" className="btn btn-primary">Sign In</button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		...ThemeActions
	}, dispatch);
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, mapDispatchToProps)(Signin);