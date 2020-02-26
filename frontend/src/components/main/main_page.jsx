import React from "react";
import { Link } from 'react-router-dom';
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div id="main-page">
        <header className="login-page-header">
          <div className="login-page-header-left">
            <Link to="/">
              <h1 className="header-logo">SchoolForce</h1>
            </Link>
          </div>
          <div className="main-page-links">
            <Link className="login-button" to="/login">Login</Link>
            <Link className="signup-button" to="/signup">Signup</Link>
          </div>
        </header>

        <section className="main-page-body">
          <h2 className="main-page-body-main-hook">You're a school director and parents never read your emails?</h2>
          <img className="main-page-body-frustration-image" src="https://images.unsplash.com/photo-1552345386-6690de5b2c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          <div className="main-page-body-descriptions">
            <div className="main-page-body-second-third-hooks">
              <h3 className="main-page-body-secondary-hook">SchoolForce is a light CRM for SMS communication with parents 100% from your computer
                <img className="main-page-body-calm-computer-img" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"/>
              </h3>
              <h3 className="main-page-body-third-hook">Meet parents where they are - send short reminders that actually get read
                <img className="main-page-body-happy-parent-img" src="https://images.unsplash.com/photo-1528475775637-ed767f76e6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
              </h3>
              
            </div>
            
            <div className="main-body-page-student-focus-section">
              <h3 className="main-page-body-fourth-hook">So you get to focus on what matters most: your students</h3>
              <img className="child-picture" src="https://images.unsplash.com/photo-1580968895877-a19ec54aadc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
            </div>
          </div>
        </section>
        
        <footer className="main-page-footer">
          <div> Copyright &copy; 2020 SchoolForce</div>
        </footer>
      </div>
    );
  }
}

export default MainPage;
