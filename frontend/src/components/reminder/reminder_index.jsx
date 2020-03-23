import React from 'react'
import ReminderIndexItem from './reminder_index_item.jsx'
import { Link } from 'react-router-dom'
import "./reminder_index.css";

class ReminderIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReminders();
  }

  render() {
    let users = this.props.users;
    let filteredReminders = this.props.reminders.filter((reminder) => reminder.parentId.includes(this.props.currentUser.id));
    let reminderList;
    
    if (filteredReminders.length === 0) {
      reminderList = <p>You do not have any past reminders</p>;
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

export default ReminderIndex;