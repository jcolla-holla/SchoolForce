import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./about.css";

const About = (props) => {
    return (
        <div id="ourTeamContainer">
            <h1>Our Team</h1>
            <div className="meet-the-team">Meet the team that built SchoolForce.  We are always open to software engineering opportunities - reach out to us!</div>
            <div className="teamProfiles">
                <div>
                    <div className="teamProfile">
                        {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                        <a target="_blank" rel="noopener noreferrer" href="https://jessecolligan.com/"><div className="profPic1" /></a>
                        
                        <div className="profName">Jesse Colligan</div>

                        <div className="profileLinks">
                            <a target="_blank" rel="noopener noreferrer" href="http://github.com/jcolla-holla/">
                                <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/jessecolligan/">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                            </a>
                        </div>
                    </div>

                <div className="teamProfile">
                    {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                
                    <a target="_blank" rel="noopener noreferrer" href="https://www.dansteryoo.io/"> <div className="profPic2" /></a>
                    <div className="profName">Danny Yoo</div>

                    <div className="profileLinks">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dansteryoo">
                            <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/dansteryoo/">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                        </a>
                    </div>
                </div>
                </div>
                <div>
                <div className="teamProfile">
                    {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://www.stephendipietro.io"><div className="profPic3" /></a>
                    <div className="profName">Stephen DiPietro</div>

                    <div className="profileLinks">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sdipietro">
                            <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                        </a>
                            <a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/stephen-a-dipietro-engineer/">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" id="icon" />
                        </a>
                    </div>
                </div>

                <div className="teamProfile">
                    {/* Jesse note: tried to use <img> but path was giving me issues so I just pivoted to using CSS background-image.  See: /about.css */}
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/"><div className="profPic4" /></a>
                    <div className="profName">Antonio Cuccu</div>

                    <div className="profileLinks">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/acuccu">
                            <FontAwesomeIcon icon={faGithub} size="4x" color="black" id="icon" />
                        </a>
                            <a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/">
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