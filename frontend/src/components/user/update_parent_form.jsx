import React from "react";
import { withRouter } from "react-router-dom";

class UpdateParentForm extends React.Component {
  constructor(props) {
    super(props);

    const {
      firstName,
      lastName,
      email,
      mobile,
      schoolId
    } = this.props.updateParent;

    this.state = {
      id: this.props.parentId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      schoolId: schoolId,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    if (Array.isArray(this.state[field])) {
      return e =>
        this.setState({
          [field]: e.currentTarget.value
        });
    } else {
      return e =>
        this.setState({
          [field]: e.currentTarget.value
        });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const parent = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.mobile,
      schoolId: this.state.schoolId
    };

    this.props
      .processForm(parent)
      .then()
      .then(() => this.props.closeModal());
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
      <div className="student-form-page">
        <div className="form-closing-x" onClick={() => this.props.closeModal()}>
          &#10005;
        </div>
        <div className="student-form-container">
          <form onSubmit={this.handleSubmit} className="student-form-box">
            <br />
            <div className="student-form-title">Update Your Information</div>
            <br />
            <div className="student-form">
              <label className="update-label">
                First Name:
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  className="student-form-input"
                />
              </label>
              <label className="update-label">
                Last Name:
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  className="student-form-input"
                />
              </label>
              <label className="update-label">
                E-mail:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="student-form-input"
                />
              </label>
              <label className="update-label">
                Phone Number:
                <input
                  type="text"
                  value={this.state.mobile}
                  onChange={this.update("mobile")}
                  className="student-form-input"
                />
              </label>
              <label className="update-label">
                School ID:
                <input
                  type="text"
                  value={this.state.schoolId}
                  onChange={this.update("schoolId")}
                  className="student-form-input"
                />
              </label>
              <div className="student-form-error-messages">
                {this.renderErrors()}
              </div>
              <input
                type="submit"
                value="Update Profile"
                className="student-form-submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateParentForm);
