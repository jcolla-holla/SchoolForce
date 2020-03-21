import React from 'react';
import "./reminder_index_item.css";

class ReminderIndexItem extends React.Component {

    render() {
        let author = this.props.users.filter(user => user._id === this.props.reminder.authorId)[0];
        // debugger
        return (
            <li className="reminder-item-container">
                <div className="reminder-title">
                    {this.props.reminder.title}
                </div>
                <div className='reminder-body'>
                    {this.props.reminder.body}
                </div>
                <div className="reminder-bottom">
                    <div className='reminder-author-id'>
                        From: {author.firstName} {author.lastName}
                    </div>
                    <div className='reminder-date'>
                        Sent: {this.props.reminder.createdDate}
                    </div>
                </div>
            </li>
        )
    }
}

export default ReminderIndexItem;