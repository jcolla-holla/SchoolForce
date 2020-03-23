import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateStudentFormContainer from '../student/create_student_form_container';
import UpdateStudentFormContainer from '../student/update_student_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;
    
    let component;
    switch (modal) {
        case 'Register Student':
            component = <CreateStudentFormContainer />;
            break;
        case 'Update Student':
            component = <UpdateStudentFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {

    let modalVar
    if (!state.modal) {
        modalVar = null
    } else {
        modalVar = state.modal.formType
    }
    let idVar
        if (!state.modal) {
            idVar = null
        } else {
            idVar = state.modal.id
        }

    return {
        modal: modalVar,
        id: idVar
    };
};


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);