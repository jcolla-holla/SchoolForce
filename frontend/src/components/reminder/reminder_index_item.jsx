import React from 'react';
import "./reminder_index_item.css";

class ReminderIndexItem extends React.Component {

    render() {
        // let author = this.props.users[this.props.reminder.authorId];
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
                        From: {this.props.reminder.authorId}
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