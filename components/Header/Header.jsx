import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className={`header header--${this.props.type}`}>
        <div className="header__inner">
          <h1 className="header__title heading heading--lg">{this.props.title}</h1>
          <div className="header__links">
            {
              this.props.navItems.map((item, idx) => <a key={idx} href="#"
                                                        className={`header__link header__link-first ${idx === 0 ? ' active' : ''}`}>{item}</a>)
            }
          </div>
          <div className="header__user">
            <i className="header__avatar icon icon--account-circle icon--white icon--xxxl"/>
            <div className="header__auth-links"><strong>Sign up</strong><br/>or Log in</div>
            <a href="#" className="header__basket">
              <i className="header__basket-icon icon icon--shopping-cart icon--white icon--xxl"/>
            </a>
          </div>
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  loggedIn: false,
  type: ''
};
