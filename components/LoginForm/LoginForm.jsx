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
            <FormInputGroup id="username" label="Username"/>
          </div>
          <div className="margin-bottom-md">
            <FormInputGroup id="password" label="Password" input={{type: 'password'}} />
          </div>
          <button type="submit" className="btn btn--primary">Log in</button>
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
