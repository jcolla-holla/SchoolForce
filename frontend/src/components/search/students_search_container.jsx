import { connect } from 'react-redux';
import { fetchAllStudents, deleteStudent, updateStudent, fetchParent } from '../../actions/student_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { createReminder } from '../../actions/reminder_actions';
import StudentsSearch from  './students_search.jsx'


const mapStateToProps = (state) => {
    return {
        students: Object.values(state.entities.students),
        users: state.entities.users,
        adminUserId: state.session.user.id
    }
};

const mapDispatchToProps = (dispatch) => ({
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
    updateStudent: (student) => dispatch(updateStudent(student)),
    fetchParent: (parentId) => dispatch(fetchParent(parentId)),
    fetchAllStudents: () => dispatch(fetchAllStudents()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createReminder: (reminder) => dispatch(createReminder(reminder)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(StudentsSearch)
);