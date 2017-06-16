import React from 'react'
import PropTypes from 'prop-types';
import FormInputGroup from '../FormInputGroup/FormInputGroup';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  render() {
    return (
      <div className={'login-form'}>
        <form action={this.props.formAction} method="post">
          <div className="margin-bottom-md">
            <FormInputGroup id="username" label="Username" input={{name: 'username', focus: this.props.shown  }}/>
          </div>
          <div className="margin-bottom-md">
            <FormInputGroup id="password" label="Password" input={{type: 'password', name: 'password' }}/>
          </div>
          <div className="l-inline-parent l-vcenter-children ">
            <div className="l-inline-child">
              <button type="submit" className="btn btn--primary">Log in</button>
            </div>
            <div className="l-inline-child padding-left-md padding-right-md">
              or
            </div>
            <div className="l-inline-child">
              <a href="#" className="btn btn--link">Sign up</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  formAction: PropTypes.string
};

LoginForm.defaultProps = {
  formAction: '/login'
};
