import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      demoParent: false,
      demoAdmin: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/reminders");
    }

    this.setState({ errors: nextProps.errors });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    let demoAdmin = {
      email: "demoAdmin@fake.org",
      password: "password"
    };

    let demoParent = {
      email: "demoparent@gmail.com",
      password: "12345678"
    };

    if (this.state.demoAdmin === true) {
      return this.props.login(demoAdmin);
    } else if (this.state.demoParent === true) {
      return this.props.login(demoParent);
    } else {
      return this.props.login(user);
    }
  }

  demoParentLogin() {
    this.setState({ demoParent: true });
  }

  demoAdminLogin() {
    this.setState({ demoAdmin: true });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-page">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="form-title">Log in</div>
            <div className="login-form">
              <div className="form-header-login">
                <a href="#/signup">Sign Up</a>
                <a href="#/login">Log in</a>
              </div>
              <button
                className="demo-login-button"
                onClick={() => this.demoAdminLogin()}
              >
                Demo Login as Admin
              </button>
              <button
                className="demo-login-button"
                onClick={() => this.demoParentLogin()}
              >
                Demo Login as Parent
              </button>
              <label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                  className="login-input"
                />
              </label>
              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                  className="login-input"
                />
              </label>
              <div className="session-error-messages">
                {this.renderErrors()}
              </div>
              <input type="submit" value="Log in" className="session-submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
