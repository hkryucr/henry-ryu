import React from 'react';
import './main_contents_project.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const MainContentsProject = ({projectInfo}) => {
    return (
      <div className="main-contents-project">
        <div className="main-contents-project-container">
          <div className="project-title">
            <span>{projectInfo.title}</span>
            <a target="_blank" href={projectInfo.liveLink}>
              <span>Live Link</span>
            </a>
            <a target="_blank" href={projectInfo.gitLink}>
              <span>github</span>
            </a>
          </div>
          <div className="project-stacks">{projectInfo.stacks}</div>
          <div className="project-info">{projectInfo.info}</div>
          <div className="project-info-features">
            {projectInfo.infoFeatures.map((feature, idx) => (
              <div className="project-info-feature" key={idx}>
                <FontAwesomeIcon icon={faSeedling} size="xs" color="gray" />
                {feature}
              </div>
            ))}
          </div>
          <div className="project-info-img">
            <img src={projectInfo.imgUrl} key={projectInfo.imgUrl} alt="" />
          </div>
        </div>
      </div>
    );
}

export default MainContentsProject;
