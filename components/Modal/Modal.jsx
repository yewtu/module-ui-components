import React from 'react'
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
    this.onLoginModalClose = this.onLoginModalClose.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  onLoginModalClose() {
    this.setState({ open: false });
    this.props.onClose();
  }

  onKeyDown(e) {
    if (e.keyCode === 27) {
      this.onLoginModalClose();
    }
  }

  render() {
    const { size } = this.props;
    return (
      <div className={`modal ${this.state.open ? ' active' : ''} modal--${size}`}>
        <div className="modal__content">
          <button type="button" className="modal__close btn" onClick={this.onLoginModalClose}><i className="icon icon--close icon--xxl" /></button>
          {this.props.children}
        </div>
        <div className="modal__mask"></div>
      </div>
    )
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.string
};

Modal.defaultProps = {
  open: false,
  onClose: () => {},
  size: 'md'
};
