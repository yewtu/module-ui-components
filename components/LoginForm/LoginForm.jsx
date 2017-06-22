import React from 'react'
import PropTypes from 'prop-types';
import FormInputGroup from '../FormInputGroup/FormInputGroup';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: props.open,
			selectedUser: ''
		};
	}

	render() {
		const users = [
			{
				displayName: 'Tasty Burger',
				userName: 'tastyburger'
			},
			{
				displayName: 'Waits & Spencer',
				userName: 'waitsandspencer'
			},
			{
				displayName: 'The Saffron Badger',
				userName: 'saffronbadger'
			}
		];
		return (
			<div className={'login-form'}>
				<form action={this.props.formAction} method="post">
					<div className="margin-bottom-md">
						<FormInputGroup id="username" label="Username"
														input={{
															name: 'username',
															focus: this.props.shown,
															value: this.state.selectedUser,
															onChange: val => this.setState({selectedUser: val})}}/>
					</div>
					<div className="margin-bottom-md">
						<div className="list list--inline">
							<div className="list__item list__item-lead text text--xs">Log in as:</div>
							{
								users.map((user, idx) => <div className="list__item">
									<button type="button" className="btn btn--xs link"
													onClick={() => this.setState({selectedUser: user.userName})}>{user.displayName}</button>
								</div>)
							}
						</div>
					</div>
					<div className="margin-bottom-md">
						<FormInputGroup id="password" label="Password" input={{type: 'password', name: 'password'}}/>
					</div>
					<div className="l-inline-parent l-vcenter-children ">
						<div className="l-inline-child">
							<button type="submit" className="btn btn--primary">Log in</button>
						</div>
						<div className="l-inline-child padding-left-md padding-right-md">
							or
						</div>
						<div className="l-inline-child">
							<a href="#" className="btn btn--link">Sign up</a>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

LoginForm.propTypes = {
	formAction: PropTypes.string
};

LoginForm.defaultProps = {
	formAction: '/login'
};
