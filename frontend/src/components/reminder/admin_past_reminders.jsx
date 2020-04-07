import React from "react";
import ReminderIndexItem from "./reminder_index_item.jsx";
import { Link } from "react-router-dom";
import "./reminder_index.css";

class AdminPastReminders extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReminders();
  }

  render() {
    if (this.props.reminders.length === 0) {
      return <div></div>
    }

    let users = this.props.users;

    let filteredReminders = this.props.reminders.filter(reminder =>
      reminder.authorId === this.props.currentUser.id
    );
    let reminderList;

    if (filteredReminders.length === 0) {
      reminderList = <p>You have not sent any reminders</p>;
    } else {
      reminderList = filteredReminders.map(reminder => (
        <ReminderIndexItem
          reminder={reminder}
          users={users}
          key={reminder._id}
        />
      ));
    }

    return (
      <div id="reminder-index-page">
        <div className="welcome-header">
          <p>
            Hello {this.props.currentUser.firstName}{" "}
            {this.props.currentUser.lastName}, welcome to your dashboard
          </p>
          <Link className="create-student-button" to="/profile">
            View Profile
          </Link>
        </div>
        <div className="reminder-index-container">
          <h2 className="reminder-index-header">Your past reminders</h2>
          <ul className="reminder-list">{reminderList}</ul>
        </div>
      </div>
    );
  }
}

export default AdminPastReminders;
