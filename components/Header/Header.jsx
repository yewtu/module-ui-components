import React from 'react'
import PropTypes from 'prop-types';
import UserLogin from '../UserLogin/UserLogin';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginModalOpen: false,
			navMenuOpen: false
		};
	}

	render() {
		const {title, titleLink, user, type: applicationType, loginRedirect} = this.props;
		return (
			<header className={`header header--${applicationType}`}>
				<div className="header__inner">
					<a href={titleLink}
						 className="header__item-vcentered header__title heading heading--lg link link--unstyled">{title}</a>
					<div className="header__right-hand">
						<div className="header__item-vcentered">
							<UserLogin user={user} loginRedirect={loginRedirect}/>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

Header.propTypes = {
	title: PropTypes.string,
	titleLink: PropTypes.string,
	navItems: PropTypes.array,
	user: PropTypes.object,
	type: PropTypes.string,
	loginRedirect: PropTypes.string
};

Header.defaultProps = {
	type: '',
	navItems: []
};
