import { connect } from 'react-redux';
import { createReminder } from '../../actions/reminder_actions';
import { withRouter } from 'react-router-dom';
import ReminderForm from './reminder_form'


const mapStateToProps = (state) => {

    let students = Object.values(state.entities.students).filter(val => val !== 0);
    
    return {
        students: students,
        users: Object.values(state.entities.users),
        adminUser: [state.session.user]
    }
};

const mapDispatchToProps = (dispatch) => ({
    createReminder: (reminder) => dispatch(createReminder(reminder)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ReminderForm)
);