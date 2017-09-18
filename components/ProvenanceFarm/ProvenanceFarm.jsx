import React from 'react';
import PropTypes from 'prop-types';

export default class ProvenanceFarm extends React.Component {
	render() {
		const {farmProvenanceCertifications, size} = this.props;
		return <span className={`provenance-farm provenance-farm--${size}`}>
			{
				farmProvenanceCertifications.map((type, idx) => <img key={idx} height='40px' className="provenance-farm__img" src={`/img/certification-logos/${type.id}.png`} alt={type.label} />)
			}
		</span>;
	}
}

ProvenanceFarm.propTypes = {
	farmProvenanceCertifications: PropTypes.array,
	size: PropTypes.string
};

ProvenanceFarm.defaultProps = {
	farmProvenanceCertifications: [],
	size: 'md'
};
