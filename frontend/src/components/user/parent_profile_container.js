import { connect } from "react-redux";
import { fetchAllStudents } from '../../actions/student_actions';
import { withRouter } from "react-router-dom";
import ParentProfile from "./parent_profile.jsx";

const mapStateToProps = state => {
    let students;
    if (Object.values(state.entities.students).length === 0) {
        students = [];
    } else {
        students = Object.values(state.entities.students);
    }

    return {
        currentUser: state.session.user,
        students: students
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllStudents: () => dispatch(fetchAllStudents())
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ParentProfile)
);