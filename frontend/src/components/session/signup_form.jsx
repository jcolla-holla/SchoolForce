import React from "react";
import { withRouter } from "react-router-dom";
import "./signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
      password2: "",
      schoolId: "",
      demoParent: false,
      demoAdmin: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      return this.props.signup(user, this.props.history);
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
      <div className="signup-form-page">
        <div className="signup-form-container">
          <div className="form-title">Sign up</div>

          
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="signup-form">
              <div className="form-header-signup">
                <a href="#/signup">Sign Up</a>
                <a href="#/login">Log in</a>
              </div>

              

              <div className="input-fields">
                <div className="input-fields-left">
                  <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.update("firstName")}
                    placeholder="First Name"
                    className="signup-input"
                  />
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="signup-input"
                  />
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="signup-input"
                  />
                </div>
                <div className="input-fields-left">
                  <input
                    type="text"
                    value={this.state.lastName}
                    onChange={this.update("lastName")}
                    placeholder="Last Name"
                    className="signup-input"
                  />

                  <input
                    type="text"
                    value={this.state.mobile}
                    onChange={this.update("mobile")}
                    placeholder="Phone Number"
                    className="signup-input"
                  />
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                    className="signup-input"
                  />
                </div>
              </div>
                  <input
                    type="text"
                    value={this.state.schoolId}
                    onChange={this.update("schoolId")}
                    placeholder="School ID"
                    className="signup-input"
                  />
              <div className="session-error-messages">
                {this.renderErrors()}
              </div>
              <input type="submit" value="Sign up" className="session-submit" />
            </div>
            <div className="demo-login-buttons">
              <div className="orLine">
                <p>OR</p>
              </div>
              <div className="demoButtons">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
