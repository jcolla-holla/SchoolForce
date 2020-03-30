import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./about.css";

const About = (props) => {
    return (
        <div id="ourTeamContainer">
            <h1>Our Team</h1>
            <p>Meet the team that built SchoolForce.  We are always open to software engineering opportunities - reach out to us!</p>
            <div className="teamProfiles">
                <div>
                    <div className="teamProfile">
                        {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                        <a target="_blank" href="https://jessecolligan.com/"><div className="profPic1" /></a>
                        
                        <p className="profName">Jesse Colligan</p>

                        <div className="profileLinks">
                            <a target="_blank" href="http://github.com/jcolla-holla/">
                                <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                            </a>
                            <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/jessecolligan/">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                            </a>
                        </div>
                    </div>

                <div className="teamProfile">
                    {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                
                    <a target="_blank" href="https://www.dansteryoo.io/"> <div className="profPic2" /></a>
                    <p className="profName">Danny Yoo</p>

                    <div className="profileLinks">
                            <a target="_blank" href="https://github.com/dansteryoo">
                            <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                        </a>

                        <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/dansteryoo/">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                        </a>
                    </div>
                </div>
                </div>
                <div>
                <div className="teamProfile">
                    {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                    
                    <a target="_blank" href="https://www.stephendipietro.io"><div className="profPic3" /></a>
                    <p className="profName">Stephen DiPietro</p>

                    <div className="profileLinks">
                            <a target="_blank" href="https://github.com/sdipietro">
                            <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                        </a>
                            <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/stephen-a-dipietro-engineer/">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                        </a>
                    </div>
                </div>

                <div className="teamProfile">
                    {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                    
                    <a target="_blank" href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/"><div className="profPic4" /></a>
                    <p className="profName">Antonio Cuccu</p>

                    <div className="profileLinks">
                            <a target="_blank" href="https://github.com/acuccu">
                            <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                        </a>
                            <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        

    )
}

export default About;