import React from 'react';
import PropTypes from 'prop-types';

export default class Collapsible extends React.Component {
	constructor(props) {
		super(props);
		this.onToggle = this.onToggle.bind(this);
		this.state = {
			collapsed: props.collapsed
		};
	}

	onToggle() {
		this.setState({collapsed: !this.state.collapsed});
	}

	render() {
		const {triggerSize, triggerTitle, triggerTextClasses} = this.props;
		return (
			<div className="collapsible">
				<button className={`collapsible__trigger btn${this.state.collapsed ? '' : ' active'}`} type="button" onClick={this.onToggle}>
					<span className={`icon-text icon-text--right icon-text--${triggerSize}`}>
						<span className={`collapsible__trigger-title ${triggerTextClasses}`}>{triggerTitle}</span>
						<i className={`icon icon--chevron-down icon--gray icon--${triggerSize}`}></i>
						<i className={`icon icon--chevron-up icon--gray icon--${triggerSize}`}></i>
					</span>
				</button>
				<div className={`collapsible__target ${this.state.collapsed ? '' : ' active'}`}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Collapsible.defaultProps = {
	collapsed: true,
	triggerTitle: '',
	showTrigger: true,
	triggerTextClasses: '',
	triggerSize: 'md'
};