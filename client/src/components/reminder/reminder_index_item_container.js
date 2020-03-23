import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReminderIndexItem from "./reminder_index_item";

const mapStateToProps = state => {
    let users;
    if (Object.values(state.entities.users).length === 0) {
        users = {};
    } else {
        users = Object.values(state.entities.users);
    }

    return {
        users: users
    };
};

export default withRouter(
    connect(mapStateToProps)(ReminderIndexItem)
);