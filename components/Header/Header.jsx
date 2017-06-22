import React from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalOpen: false,
      navMenuOpen: false
    };
  }

  render() {
    const {title, titleLink, navItems, user, type: applicationType} = this.props;
		const popupMenuItems = [
			{
				label: 'Item 1',
				link: 'http://yewtu-farm.herokuapp.com/'
			}
		];
    return (
      <header className={`header header--${applicationType}`}>
        <div className="header__inner">
          <a href={titleLink} className="header__item-vcentered header__title heading heading--lg link link--unstyled">{title}</a>
          <div className="header__links">
            {
              navItems.map((item, idx) => <a key={idx} href="#"
                                             className={`header__item-vcentered header__link header__link-first ${idx === 0 ? ' active' : ''}`}>{item}</a>)
            }
          </div>
          <div className="header__user">
            {
              user ?
                <div className="header__item-vcentered header__auth">
                  <span className="header__item-vcentered header__greeting text text--lg padding-right-md">{user.displayName}</span>
                  <img className="header__item-vcentered header__avatar"
                       src={`/images/avatar-${user.userName}.jpg`}/>
                  <a href="/logout" className="header__greeting link text text--white text--xs padding-left-md">Log out</a>
                </div>
                :
                <button type="button" onClick={() => this.setState({loginModalOpen: true})}
                        className="btn header__auth"><i
                  className="header__item-vcentered header__avatar-icon icon icon--account-circle icon--white icon--xxxl"/>
                  <span className="header__item-vcentered header__auth-links"><strong>Sign up</strong><br/>or Log in</span>
                </button>
            }
            <a href="#" className="header__item-vcentered header__basket">
              <i className="header__item-vcentered icon icon--shopping-cart icon--white icon--xxl"/>
            </a>
            <button type="button" className="btn header__item-vcentered header__basket" onClick={()=> this.setState({navMenuOpen: !this.state.navMenuOpen})}>
              <i className="header__item-vcentered icon icon--menu icon--white icon--xxl"/>
            </button>
            <div className={`popup-menu popup-menu--right-align ${this.state.navMenuOpen ? ' active' : ''}`}>
              <div className="popup-menu__panel">
                {
                  popupMenuItems.map((item, idx) => <a className="link link--unstyled" href={item.link}>{item.label}</a>)
                }
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={this.state.loginModalOpen}
          onClose={() => this.setState({loginModalOpen: false})}
          size='sm'
          useMask={true}>
          <div className="l-hcentered l-width-80">
            <LoginForm shown={this.state.loginModalOpen} />
          </div>
        </Modal>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  navItems: PropTypes.array,
  user: PropTypes.object,
  type: PropTypes.string
};

Header.defaultProps = {
  type: '',
  navItems: []
};
