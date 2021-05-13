import React, { useState } from 'react';
import './main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContentsProject from './main_contents_project';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import LastProject from "./last_project";
import Toggle from "./components/Toggler";
import { hardCoded } from './hardCoded';

const Main = (props) => {
    const [currTabNumber, setCurrTabNumber] = useState(-1)
    const [darkMode, setDarkMode] = useState(false)
    const projects = hardCoded.body.projectInfo;
    const leftPanelitems = hardCoded.body.leftPanel;

    const switchClick = e => {
        e.preventDefault();
        props.themeToggler();
        setDarkMode(!darkMode)
    }

    const projectInfo = projects[currTabNumber + 1]
    const renderTabs = leftPanelitems
        .map((tab) => 
            <div
                className={`main-contents-tab ${
                currTabNumber !== tab.tabId ? "white" : null
                }`}
                onClick={()=>setCurrTabNumber(tab.tabId)}
                key={tab.tabId}
            >
                <div className="main-contents-tab-header">
                    <span>{tab.title}</span>
                    <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        color="#b0b0b0"
                    />
                </div>
                <div className="main-contents-tab-content">
                    <span>{tab.content}</span>
                </div>
            </div>
        )

    return (
        <div className="main">
          <div className="main-container">
            <div className="main-title">
              <div>Latest Projects</div>
              <Toggle
                theme={props.theme}
                themeToggler={props.themeToggler}
                innerText={ darkMode ? "Light Mode" : "Night Mode" }
                switchClick={ switchClick }
              />
            </div>
            <div className="main-contents">
              <div className="main-contents-tabs">
                { renderTabs }
              </div>
              { currTabNumber === 3 ? <LastProject/> : <MainContentsProject projectInfo={projectInfo} /> }
            </div>
          </div>
        </div>
    )
}

export default Main;
