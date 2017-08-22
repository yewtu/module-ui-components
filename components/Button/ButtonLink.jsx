import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonLink extends React.Component {
	render() {
		const {linkUrl, classNames, onClick, type} = this.props;
		return (
			<a
				href={linkUrl}
				className={`btn btn--${type} btn--icon btn--icon-lg ${classNames}`}
				onClick={onClick}
			>
				{this.props.children}
				<i className="icon icon--chevron-right icon--white icon--xl"/>
			</a>
		)
	}
}

ButtonLink.propTypes = {
	linkUrl: PropTypes.string.isRequired,
	classNames: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func
};

ButtonLink.defaultProps = {
	classNames: '',
	onClick: () => {},
	type: 'primary'
};