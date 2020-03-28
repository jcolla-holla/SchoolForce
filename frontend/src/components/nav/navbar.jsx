import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* THIS TO BE A LINK BACK TO 'home' screen post-login... Main component? */}
          {/* <Link to={"/profile"}>Profile</Link> */}
          <button className="logoutLink" onClick={this.logoutUser}>Logout</button>
          
        </div>
      );
    } else {
      return (
        <div>
          {/* <Link className="signupLink" to={"/signup"}>Sign up</Link> */}
          <Link className="loginLink" to={"/login"}>Log in</Link>
          {/* <Link className="ourTeamLink" to={"/about"}>Our Team</Link> */}
        </div>
      );
    }
  }

  render() {
    return (
      <div id="nav-bar-container">
        <Link to="/" className="navbar-logo">SchoolForce</Link>
        <div class="nav-links">
          <a href="#about">Our Team</a>
        </div>
        {this.getLinks()}</div>
    );
  }
}

export default NavBar;
