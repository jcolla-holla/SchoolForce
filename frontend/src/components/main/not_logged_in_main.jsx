import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSms} from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faFileMedical} from '@fortawesome/free-solid-svg-icons';
import About from "../nav/about";



const NotLoggedInMain = () => (
    <div>
        <section className="main-page-body">
            <div className="first-hook-div">
                <img
                    className="main-page-body-frustration-image"
                    src="https://image.shutterstock.com/z/stock-vector-school-principal-in-suit-sitting-in-his-office-and-working-director-at-the-table-education-and-1186878361.jpg"
                    alt=""
                />
                <div className="first-hook-descrition">
                    <h2 className="main-page-body-main-hook">
                        Are you a <p>SCHOOL DIRECTOR</p> and parents never read your emails?
                    </h2>
                    <p className="first-hook-descritption"><strong>SchoolForce</strong> is a light CRM for SMS communication with parents 100% from your computer. 
                    <p>Meet parents where they are - send short reminders that actually get read.</p></p>
                    <Link className="creat-account-button" to={"/signup"}>Register now</Link>
                </div>
            </div>

            <div className="resources">
                
                <h1 className="resources-title">Say goodbye to spreadsheets and emails.</h1>
                <div className="resources-icons">
                    <div id="sms-icon" className="resource-icon">
                        <FontAwesomeIcon className="icons" size="14x" icon={faSms} />
                        <h3>SMS messages</h3>
                        <p>Instantaneously send sms messages to parents, reaching them anywhere and anytime.</p>
                    </div>
                    <div id="icon-database"  className="resource-icon">
                        <FontAwesomeIcon className="icons" icon={faDatabase} />
                        <h3>Student Database</h3>
                        <p>Seamlessly search through your students' database.</p>
                    </div>
                    <div id="icon-medical" className="resource-icon">
                        <FontAwesomeIcon className="icons" icon={faFileMedical} />
						<h3>Medical Needs</h3>
						<p>Sort and keep track of your students' allergies and medical needs.</p>
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