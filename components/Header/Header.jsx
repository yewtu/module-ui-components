import React from 'react'
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="l-container">
                    {this.props.children}
                </div>
            </header>
        )
    }
}
