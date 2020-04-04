import React from "react";
import { withRouter } from "react-router-dom";

class UpdateStudentForm extends React.Component {
  constructor(props) {
    super(props);

    const { firstName, lastName, parentId, allergies, specialNeeds,
      medicalConditions, gender, dateOfBirth, startDate, grade, } = this.props.updateStudent[0]

    this.state = {
      id: this.props.studentId,
      firstName: firstName,
      lastName: lastName,
      parentId: parentId,
      allergies: allergies,
      specialNeeds: specialNeeds,
      medicalConditions: medicalConditions,
      gender: gender,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      grade: grade
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

    componentWillUnmount() {
      return this.props.fetchAllStudents();
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

  // addData(field) {
  //   return e =>
  //     this.setState({
  //       [field]: this.state[field] << e.currentTarget.value
  //     });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const { allergies, specialNeeds, medicalConditions } = this.state

    let allergiesArr = allergies ? allergies : allergies.split(", ");
    let specialNeedsArr = specialNeeds ? specialNeeds : specialNeeds.split(", ");
    let medicalConditionsArr = medicalConditions ? medicalConditions : medicalConditions.split(", ");

    const student = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      parentId: this.state.parentId,
      allergies: allergiesArr,
      specialNeeds: specialNeedsArr,
      medicalConditions: medicalConditionsArr,
      gender: this.state.gender,
      dateOfBirth: this.state.dateOfBirth,
      startDate: this.state.startDate,
      grade: this.state.grade,
      errors: this.state.errors
    };

    this.props.processForm(student)
      .then()
      .then(() => this.props.closeModal())
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

    // if (this.props === undefined) {
    //   return <div></div>
    // };

    return (
      <div className="student-form-page">
        <div className="student-form-container">

          <form onSubmit={this.handleSubmit} className="student-form-box">
            <br />
            <div className="modal-upper">
                <div className="update-student-form-title">Update Your Student</div>
                <div className="update-student-form-closing-x" onClick={() => this.props.closeModal()}>
                    &#10005;
                </div>
            </div>
                <br />
            <div className="student-form">
              <p className="student-form-header">
                Student Information
              </p>
              <label className='update-label'>First Name:
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  className="student-form-input"
                />
              </label>
              <label className='update-label'>Last Name:
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  className="student-form-input"
                />
              </label>
              <label className='update-label'>Allergies:
                <input
                  type="text"
                  value={[this.state.allergies]}
                  onChange={this.update("allergies")}
                  className="student-form-input"
                />
                <p className="student-form-instructions">Input all allergies separated by commas. Ex: peanuts, seafood, gluten, etc. If none, please leave blank.</p>
              </label>
              <label className='update-label'>Special Needs:
                <input
                  type="text"
                  value={this.state.specialNeeds}
                  onChange={this.update("specialNeeds")}
                  className="student-form-input"
                />
                <p className="student-form-instructions">Input all special needs separated by commas. Ex: wheelchair, hearing assistance, etc. If none, please leave blank.</p>
              </label>
              <label className='update-label'>Medical Conditions:
                <input
                  type="text"
                  value={this.state.medicalConditions}
                  onChange={this.update("medicalConditions")}

                  className="student-form-input"
                />
                <p className="student-form-instructions">Input all medical conditions separated by commas. Ex: asthma, diabetes, etc. If none, please leave blank.</p>
              </label>
              <div className="student-form-error-messages">
                {this.renderErrors()}
              </div>
              <input
                type="submit"
                value={this.props.formType}
                className="student-form-submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateStudentForm);
