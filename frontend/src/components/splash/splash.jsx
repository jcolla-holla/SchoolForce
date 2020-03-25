import React from "react";
import { Link } from "react-router-dom";
import './splash.css'


class Splash extends React.Component {
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
              <Link className="loginLink" to={"/login"}>Log in</Link>
            </div>
          );
        }
      }

    render() {
    return (
    <div className="splash_all" >
        <div id="nav">
            <Link to="/" className="navbar-logo">SchoolForce</Link>
            <ul class="container">
                <li><a href="#about">Why SchoolForce?</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#team">Team</a></li>
            </ul>
            {this.getLinks()}
        </div>)};
        {/* Why  */}
        <article id="top" className="wrapper style1">
				<div className="container">
					<div className="row"></div>
                        <div classname="col-8 col-7-large col-12-medium">
							<header>
								<h1>Are you a <strong>school director</strong> and parents never read your emails?</h1>
							</header>
							<p>SchoolForce is a light CRM for SMS communication with parents 100% from your computer. Meet parents where they are - send short reminders that actually get read.</p>
                            <Link className="button large scrolly" to={"/signup"}>Register now and start sending reminders immediately</Link>
						</div>
					</div>
		</article>
        {/* resources */}

        <article id="work" className="wrapper style2">
				<div className="container">
					<header>
						<h2>Here's all the stuff I do.</h2>
					</header>
					<div className="row aln-center">
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span class="icon featured fa-comments"></span>
								<h3>SMS messages</h3>
								<p>Instantaneously send sms messages to parents, reaching them anywhere and anytime.</p>
							</section>
						</div>
						<div class="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span class="icon solid featured fa-camera-retro"></span>
								<h3>Student Database</h3>
								<p>Seamlessly search through your students' database.</p>
							</section>
						</div>
						<div className="col-4 col-6-medium col-12-small">
							<section className="box style1">
								<span class="icon featured fa-thumbs-up"></span>
								<h3>Medical Needs</h3>
								<p>Sort and keep track of your students' allergies and medicla needs.</p>
							</section>
						</div>
					</div>
				</div>
			</article>

    </div>)};
};  


export default Splash;

