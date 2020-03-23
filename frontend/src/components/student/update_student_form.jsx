import React from "react";
import { withRouter } from "react-router-dom";

class UpdateStudentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      parentId: [this.props.currentUser.id],
      allergies: [],
      specialNeeds: [],
      medicalConditions: [],
      gender: "",
      dateOfBirth: "",
      startDate: "",
      grade: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

    componentDidMount() {
        // const studentId = this.props.student._id
        // return this.props.fetchStudent(studentId)
    };

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

    let allergiesArr = allergies.length < 1 ? allergies : allergies.split(", ");
    let specialNeedsArr = specialNeeds.length < 1  ? specialNeeds : specialNeeds.split(", ");
    let medicalConditionsArr = medicalConditions.length < 1 ? medicalConditions : medicalConditions.split(", ");
    
    const student = {
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
    debugger
    const studentId = this.props.student._id

    this.props.processForm(studentId)
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

      if (this.props.student === undefined) {
          return <div></div>
      };

      debugger

    return (
      <div className="student-form-page">
        <div className='form-closing-x' onClick={() => this.props.closeModal()}>&#10005;</div>
        <div className="student-form-container">

          <form onSubmit={this.handleSubmit} className="student-form-box">
            <div className="student-form-title">
            <br/>
              Update Your Student
                <br/>
                <br/>
            </div>
            <div className="student-form">
              <p className="student-form-header">
                Student Information
              </p>
              <label>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  placeholder="First Name"
                  className="student-form-input"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  placeholder="Last Name"
                  className="student-form-input"
                />
              </label>
              <div className='gender-grade-inputs'>
                <div className="gender-radios">
                  <label className="gender-title">
                    Gender
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value="Male"
                      checked={this.state.gender === 'Male'}
                      onChange={this.update("gender")} 
                      className="gender-radio-input"
                  />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      checked={this.state.gender === 'Female'}
                      onChange={this.update("gender")}
                      className="gender-radio-input"
                    />
                    Female
                  </label>
                </div>
                <div className='student-grade'>
                  <label>Grade</label>
                  <select 
                    className='grade-selector' 
                    value={this.state.grade} 
                    onChange={this.update('grade')}>
                      <option disabled value=''>Grade</option>
                      <option value='Nursery'>Nursery</option>
                      <option value='PreK'>PreK</option>
                      <option value='Kindergarten'>Kindergarten</option>
                      <option value='1st'>1st</option>
                      <option value='2nd'>2nd</option>
                      <option value='3rd'>3rd</option>
                      <option value='4th'>4th</option>
                      <option value='5th'>5th</option>
                      <option value='6th'>6th</option>
                      <option value='7th'>7th</option>
                      <option value='8th'>8th</option>
                      <option value='9th'>9th</option>
                      <option value='10th'>10th</option>
                      <option value='11th'>11th</option>
                      <option value='12th'>12th</option>
                  </select>
                </div>
              </div>
              <div className='date-inputs'>
                <label className="date-field">Date of Birth
                  <input
                    type="date"
                    value={this.state.dateOfBirth}
                    onChange={this.update("dateOfBirth")}
                    placeholder="Date of Birth"
                    className="student-form-date-input"
                  />
                </label>
                <label className="date-field">Start Date
                  <input
                    type="date"
                    value={this.state.startDate}
                    onChange={this.update("startDate")}
                    placeholder="Start Date"
                    className="student-form-date-input"
                  />
                </label>
              </div>
              <label>
                <input
                  type="text"
                  value={this.state.allergies}
                  onChange={this.update("allergies")}
                  placeholder="Allergies"
                  className="student-form-input"
                />
                <p className="student-form-instructions">Input all allergies separated by commas. Ex: peanuts, seafood, gluten, etc. If none, please leave blank.</p>
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.specialNeeds}
                  onChange={this.update("specialNeeds")}
                  placeholder="Special Needs"
                  className="student-form-input"
                />
                <p className="student-form-instructions">Input all special needs separated by commas. Ex: wheelchair, hearing assistance, etc. If none, please leave blank.</p>
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.medicalConditions}
                  onChange={this.update("medicalConditions")}
                  placeholder="Medical Conditions"
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