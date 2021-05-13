import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons"
import { hardCoded } from './hardCoded'
import "balloon-css";

const Header = () => {
  const headerData = hardCoded.header
  return (
    <div className="header">
      <div className="header-container">
        <div className="profile-image">
          <img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile.png"/>
        </div>
        <div className="profile-name">{headerData.profileName}</div>
        <div className="profile-details">
          {headerData.profileDetails}
        </div>
        <div className="profile-socials">
          <a
            target="_blank"
            href={headerData.profileSocials.githubURL}
            aria-label="github"
            data-balloon-pos="down"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="blacks" />
          </a>
          <a
            target="_blank"
            href={headerData.profileSocials.linkedInURL}
            aria-label="linkedin"
            data-balloon-pos="down"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="blacks" />
          </a>
          <a
            target="_blank"
            href={headerData.profileSocials.angelListURL}
            aria-label="angelist"
            data-balloon-pos="down"
          >
            <FontAwesomeIcon
              icon={faAngellist}
              size="2x"
              color="blacks"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;
