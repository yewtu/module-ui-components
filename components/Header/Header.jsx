import React from 'react'

export default class Header extends React.Component {
  render() {
    const { title, navItems, loggedIn, user, type:applicationType} = this.props;
    return (
      <header className={`header header--${applicationType}`}>
        <div className="header__inner">
          <h1 className="header__title heading heading--lg">{title}</h1>
          <div className="header__links">
            {
              navItems.map((item, idx) => <a key={idx} href="#"
                                                        className={`header__link header__link-first ${idx === 0 ? ' active' : ''}`}>{item}</a>)
            }
          </div>
          <div className="header__user">
            {
              loggedIn ?
                <div className="header__auth">
                  <span className="header__greeting text text--lg text--semibold padding-right-md">Hello, {user.firstName}</span>
                  <img className="header__avatar" src={`/images/avatar-${user.role}-${user.userName}.jpg`}/>
                </div>
                :
                <div className="header__auth"><i
                  className="header__avatar-icon icon icon--account-circle icon--white icon--xxxl"/>
                  <div className="header__auth-links"><strong>Sign up</strong><br/>or Log in</div>
                </div>
            }
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
  type: '',
  navItems: []
};
