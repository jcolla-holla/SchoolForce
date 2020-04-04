import React from 'react'
import StudentItem from './student_item'
import { Link } from 'react-router-dom'
import "./students_search.css";

class StudentsSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: {
                text: '',
                allergies: false,
                specialNeeds: false,
                medicalConditions: false,
                gender: '',
                grade: ''
            },
            selectedStudents: {},
            checkedAll: false, 
        }
        this.filterUpdate = this.filterUpdate.bind(this);
        this.handleStudentCheck = this.handleStudentCheck.bind(this);
        this.adminUserId = this.props.adminUserId;
    }

    filterUpdate(field) {
        return e => {
            let newQuery = Object.assign({}, this.state.query, { [field]: e.target.value });
            let newState = Object.assign({}, this.state, { query: newQuery })
            this.setState(newState);
        }
    };

    handleFilterCheck(field) {
        return () => {
            let newQuery = Object.assign({}, this.state.query, { [field]: !this.state.query[field] });
            let newState = Object.assign({}, this.state, { query: newQuery })
            this.setState(newState);
        }
    }

    handleStudentCheck(student) {
        if (this.state.selectedStudents[student._id]) {
            let newSelectedStudents = delete this.state.selectedStudents[student._id];
            newSelectedStudents = Object.assign({}, this.state.selectedStudents, newSelectedStudents);
            let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents })
            this.setState(newState);
        } else {
            let newSelectedStudents = Object.assign({}, this.state.selectedStudents, { [student._id]: student });
            let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents })
            this.setState(newState);
        }
    }

    

    componentDidMount() {
        this.props.fetchAllStudents();
        this.props.fetchAllUsers();
    }


    studentFilters (student) {
        
        let medicalvar = true;
        let namevar = true;
        let gendervar = true;
        let gradevar = true; 

       

        if (this.state.query.allergies || this.state.query.specialNeeds || this.state.query.medicalConditions) {
            medicalvar = false;
            if (this.state.query.allergies && Boolean(student.allergies[0])) {
                medicalvar = true;
            }
            if (this.state.query.specialNeeds && Boolean(student.specialNeeds[0])) {
                medicalvar = true;
            }
            if (this.state.query.medicalConditions && Boolean(student.medicalConditions[0])) {
                medicalvar = true;
            }
        }



        if (student) {
            namevar = (student.firstName.toLowerCase().indexOf(this.state.query.text.toLowerCase()) !== -1 ||
                student.lastName.toLowerCase().indexOf(this.state.query.text.toLowerCase()) !== -1);
        }



        if (this.state.query.gender) {
            
            gendervar = student.gender.toLowerCase() === this.state.query.gender.toLowerCase();
        };

        if (this.state.query.grade) {
            gradevar = student.grade === this.state.query.grade;
        };


       return gradevar && gendervar && namevar && medicalvar;
        
    };

   


    render() {
        let filteredStudents = [];
        let filteredParentsArr = [];
        if (this.props.students[0]) {
            filteredStudents = this.props.students.filter((student) => {

                return this.studentFilters(student);
            })

            filteredParentsArr = Object.values(this.state.selectedStudents).map(student => {
                //improvement opportunity - avoid a n^2 query
                let oneStudentParentsArr = []
                for (let index = 0; index < student.parentId.length; index++) {
                    oneStudentParentsArr.push(this.props.users[student.parentId[index]]);
                }
                return oneStudentParentsArr;
            });
        }

        const handleAllCheck = (filteredStudents) => {
            if (Object.keys(this.state.selectedStudents).length === 0) {
                let newSelectedStudents = {}
                filteredStudents.forEach( student => { 
                    newSelectedStudents = Object.assign({}, newSelectedStudents, { [student._id]: student });
                    debugger
                });
                let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents, checkedAll: true });
                this.setState(newState);
            } else {
                debugger
                let newState = Object.assign({}, this.state, {selectedStudents: {}, checkedAll: false});
                this.setState(newState);
            } 
        }


        const userAdminId = this.adminUserId;
        const { createReminder, deleteStudent, updateStudent, openModal } = this.props;
        
        return ( 

            <div id='admin-search-container'>
                {/* Jesse note: not sure if we want a title or not on search page */}
                {/* <title className="adminSearchTitle">Filter the students whose parents you want to message</title> */}
                <div className='studentNameFilter'>Student Name Filter:

                    <input className='studentNameFilterTextBox' type="text" placeholder="try 'sally' or 'smith'" value={`${this.state.query.text}`} onChange={this.filterUpdate('text')} />
                    <Link
                        className="adminCreateReminderLink"
                        to={{
                            pathname: "/draftReminder",
                            state: {
                                users: { filteredParentsArr },
                                adminId: { userAdminId },
                                createReminder: { createReminder }

                            }
                        }}>Draft Reminder</Link>
                </div>

                <div className='studentChecks'>
                    <div className="checkboxContainer">

                        {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                        <label className="toggle">

                            <input className="checkboxStudent toggle__input" type="checkbox" name="allergies" onChange={this.handleFilterCheck('allergies')} />
                            <span className="toggle__label">
                                <span className="toggle__text"></span>
                            </span>
                        </label>

                        <div className="search-name">
                            Allergies?
                        </div>

                    </div>

                    <div className="checkboxContainer">

                        {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                        <label className="toggle">

                            <input className="checkboxStudent toggle__input" type="checkbox" name="specialNeeds" onChange={this.handleFilterCheck('specialNeeds')} />
                            <span className="toggle__label">
                                <span className="toggle__text"></span>
                            </span>
                        </label>

                        <div className="search-name">
                            Special Needs?
                        </div>
                    </div>


                    <div className="checkboxContainer">

                        {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                        <label className="toggle">

                            <input className="checkboxStudent toggle__input" type="checkbox" name="medicalConditions" onChange={this.handleFilterCheck('medicalConditions')} />
                            <span className="toggle__label">
                                <span className="toggle__text"></span>
                            </span>
                        </label>

                        <div className="search-name">
                            Medical Conditions?
                        </div>
                    </div>

                    

                    {/* <label className="checkboxContainer">Include Allergies Search?
                        <input className="checkbox" type="checkbox" name='allergies' onChange={this.handleFilterCheck('allergies')} />
                    </label>

                    <label className="checkboxContainer">Include Special Needs Search?
                        <input className="checkbox" type="checkbox" name='specialNeeds' onChange={this.handleFilterCheck('specialNeeds')} />
                    </label>

                    <label className="checkboxContainer">Include Medical Conditions Search?
                        <input className="checkbox" type="checkbox" name='medicalConditions' onChange={this.handleFilterCheck('medicalConditions')} />
                    </label> */}
                    <div className='studentoptions'>

                        <select className='genderSelect' onChange={this.filterUpdate('gender')}>

                            <option value="" disabled selected value>Gender</option>
                            <option value="">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option> 
                        </select>
                        <label className="gradeContainer">
                        <select className='genderSelect' value={`${this.state.query.grade}`} onChange={this.filterUpdate('grade')}>
                        <option value=''>Grade</option>
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
                        </label>
                    </div>
                </div>

                <div className='studentIndex'>
                    <h2 className='studentIndexTitle'>Select the students to draft a reminder to their parents</h2>
                    <ul className="studentsUl"> 

                    {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}

                    <label className="toggle">
                    <input className="checkboxStudent toggle__input" type="checkbox" name="selectAll" onChange={() => handleAllCheck(filteredStudents)} />
                    <span className="toggle__label">
                        <span className="toggle__text"></span>
                    </span>
                    </label>

                    <div className="search-name">
                        Select All Students
                    </div>

                    { filteredStudents.map ( student => (
                        <StudentItem 
                        student={student} 
                        handleStudentCheck={this.handleStudentCheck}
                        selectedStudents={this.state.selectedStudents}
                        deleteStudent={deleteStudent}
                        updateStudent={updateStudent} 
                        openModal={openModal}
                        key={student._id}
                        checkedAll={this.state.checkedAll}
                        />
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

export default StudentsSearch;
