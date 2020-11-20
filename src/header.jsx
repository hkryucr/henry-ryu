import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons"
import "balloon-css";

class Header extends React.Component{
    render(){
        return (
          <div className="header">
            <div className="header-container">
              <div className="profile-image">
                <img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile.png"/>
              </div>
              <div className="profile-name">Henry Ryu</div>
              <div className="profile-details">
                SF-based full-stack developer trained in React.js, Redux, Vue.js, Angular.js, Node.js,
                Express.js, Ruby on Rails, PostgreSQL, JavaScript, CSS and HTML5.
              </div>
              <div className="profile-socials">
                <a
                  target="_blank"
                  href="https://github.com/hkryucr"
                  aria-label="github"
                  data-balloon-pos="down"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" color="blacks" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/henryryume/"
                  aria-label="linkedin"
                  data-balloon-pos="down"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color="blacks" />
                </a>
                <a
                  target="_blank"
                  href="https://angel.co/u/henry-ryu"
                  aria-label="angelist"
                  data-balloon-pos="down"
                >
                  <FontAwesomeIcon
                    icon={faAngellist}
                    size="2x"
                    color="blacks"
                  />
                </a>
                <a
                  target="_blank"
                  href="Resume_HenryRyu_2020.pdf"
                  aria-label="resume"
                  data-balloon-pos="down"
                >
                  <FontAwesomeIcon icon={faFile} size="2x" color="blacks" />
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default Header;