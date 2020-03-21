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
    let filteredReminders = this.props.reminders.filter((reminder) => reminder.parentId.includes(this.props.currentUser.id));
    let users = this.props.users;
    return (
      <div id='reminder-index-page'>
        <div className="welcome-header">
          <p>Hello {this.props.currentUser.firstName} {this.props.currentUser.lastName}, welcome to your dashboard</p>
          <Link className="create-student-button" to="/profile">View Profile</Link>
        </div>
        <div className="reminder-index-container">
          <h2 className='reminder-index-header'>Your past reminders</h2>
          <ul className="reminder-list">
            {filteredReminders.map(reminder => (
              <ReminderIndexItem
                reminder={reminder}
                users={users}
                key={reminder._id}
              />)
            )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ReminderIndex;