import React from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

export default class UserLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginModalOpen: false
		};
	}

	render() {
		const {user, loginRedirect} = this.props;
		return (

			<div className="user-login">
				{
					user.userName ?
						<div>
									<span
										className="header__item-vcentered user-login__greeting text text--lg padding-right-md">{user.displayName}</span>
							{
								user.avatarFile ?
									<img className="header__item-vcentered user-login__avatar"
											 src={`/user-avatars/${user.avatarFile}`}/>
									:
									<i
										className="header__item-vcentered icon icon--account-circle icon--white icon--xxxl"/>
							}
							<a href="/logout" className="user-login__greeting link text text--white text--xs padding-left-md">Log
								out</a>
						</div>
						:
						<button type="button" onClick={() => this.setState({loginModalOpen: true})}
										className="btn header__auth"><i
							className="header__item-vcentered icon icon--account-circle icon--white icon--xxxl"/>
							<span
								className="header__item-vcentered user-login__auth-links"><strong>Sign up</strong><br/>or Log in</span>
						</button>
				}
				<Modal
					open={this.state.loginModalOpen}
					onClose={() => this.setState({loginModalOpen: false})}
					size='sm'
					useMask={true}>
					<div className="l-hcentered l-width-80">
						<LoginForm shown={this.state.loginModalOpen} redirect={loginRedirect}/>
					</div>
				</Modal>
			</div>
		);
	}
}

UserLogin.propTypes = {
	user: PropTypes.object,
	loginRedirect: PropTypes.string
};