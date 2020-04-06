import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSms} from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faFileMedical} from '@fortawesome/free-solid-svg-icons';
import About from "../nav/about";
import "./main_page.css"; 



const NotLoggedInMain = () => (
    <div>
        <section className="main-page-body">
            <div className="first-hook-div">
                <div className="first-hook-descrition">
                    <h2 className="main-page-body-main-hook">
                        <div>You are a <span>SCHOOL DIRECTOR</span> </div>
                        <div>and parents never read your emails?</div>
                        
                    </h2>
                    <div className="first-hook-descritption"><strong>SchoolForce</strong> is a light CRM for SMS communication with parents 100% from your computer. 
                    <p>Meet parents where they are - send short reminders that actually get read.</p>
                    
                    </div>
                    <div className="splashButtons">
                        <Link className="creat-account-button" to={"/signup"}>Register Now</Link>
                        <Link className="creat-account-button" to={"/login"}>Demo Login</Link>
                    </div>
                </div>
            </div>

            <div className="resources">
                
                <h1 className="resources-title">Say goodbye to spreadsheets and emails.</h1>
                <div className="resources-icons">
                    <div id="sms-icon" className="resource-icon">
                        <FontAwesomeIcon className="icons" icon={faSms} />
                        <h3>SMS messages</h3>
                        <div className="feature-description">Instantaneously send sms messages to parents, reaching them anywhere and anytime.</div>
                    </div>
                    <div id="icon-database"  className="resource-icon">
                        <FontAwesomeIcon className="icons" icon={faDatabase} />
                        <h3>Student Database</h3>
                        <div className="feature-description">Seamlessly search through your students' database.</div>
                    </div>
                    <div id="icon-medical" className="resource-icon">
                        <FontAwesomeIcon className="icons" icon={faFileMedical} />
						<h3>Medical Needs</h3>
                        <div className="feature-description">Sort and keep track of your students' allergies and medical needs.</div>
                    </div>
                </div>
            </div>
            
            <About />
        </section>

        

        <footer className="main-page-footer">
            <div> Copyright &copy; 2020 SchoolForce</div>
        </footer>
    </div>
);

export default NotLoggedInMain;