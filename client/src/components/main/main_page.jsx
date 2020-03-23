import React from "react";
import "./main_page.css";

import StudentSearchContainer from '../search/students_search_container';
import NotLoggedInMain from './not_logged_in_main';
import ReminderIndexContainer from '../reminder/reminder_index_container';

class MainPage extends React.Component {

    render() {
      if ((this.props.currentUser === undefined) || (Object.keys(this.props.currentUser).length === 0)) {
        return (
           <div id="main-page">
              <NotLoggedInMain />
           </div>
        );
      } else if (this.props.currentUser.adminStatus === true) {
        return (
          <div id="main-page">
            <StudentSearchContainer />
           </div>
        );
      } else if (this.props.currentUser.adminStatus === false) {
        return (
          <div id="main-page">
            <ReminderIndexContainer />
          </div>
        );
      }
  }
}


export default MainPage;
