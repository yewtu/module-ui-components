import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Popup extends React.Component {
    render() {
        return (
            <div className={classnames("popup", {"active": this.props.isVisible})}>
                <i className="icon icon--close" onClick={() => this.props.toggleModal()}></i>
                {this.props.children}
            </div>
        )
    }
}

Popup.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.any
}
