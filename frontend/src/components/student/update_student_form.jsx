import React from "react";
import { withRouter } from "react-router-dom";

class CreateStudentForm extends React.Component {
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

    componentWillUnmount() {
        this.props.clearErrors();
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
        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            parentId: this.state.parentId,
            allergies: this.state.allergies.split(", "),
            specialNeeds: this.state.specialNeeds.split(", "),
            medicalConditions: this.state.medicalConditions.split(", "),
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            startDate: this.state.startDate,
            grade: this.state.grade,
            errors: this.state.errors
        };

        return this.props.createNewStudent(student);
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
                <div className='form-closing-x' onClick={() => this.props.closeModal()}>&#10005;</div>
                <div className="student-form-container">
                    <form onSubmit={this.handleSubmit} className="student-form-box">
                        <div className="student-form-title">Register your student</div>
                        <p className="student-form-description">If your student is not registered on SchoolForce, please use to form below to fill out your student's infomation.</p>
                        <div className="student-form">
                            <p className="student-form-header">Student Information</p>
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
                            <label>
                                <input
                                    type="text"
                                    value={this.state.gender}
                                    onChange={this.update("gender")}
                                    placeholder="Gender"
                                    className="student-form-input"
                                />
                            </label>
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
                            <label>
                                <input
                                    type="text"
                                    value={this.state.grade}
                                    onChange={this.update("grade")}
                                    placeholder="Grade"
                                    className="student-form-input"
                                />
                            </label>
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
                                value="Register Student"
                                className="student-form-submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateStudentForm);