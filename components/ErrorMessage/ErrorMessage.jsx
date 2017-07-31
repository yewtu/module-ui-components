import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorMessage extends React.Component {
	render() {
		if (!this.props.error) return null;

		return (
			<div className="error-message">
				<div className="l-container">
					{this.props.error}
				</div>
			</div>
		);
	}
}

ErrorMessage.propTypes = {
	error: PropTypes.string
};
