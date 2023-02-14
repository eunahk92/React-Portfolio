import React from 'react';
import './style.css';
import brew_for_you from '../../assets/brew_for_you.png';
import daily_planner from '../../assets/daily_planner.png';
import eat_a_burger from '../../assets/eat_a_burger.png';
import employee_sys from '../../assets/employee_sys.png';
import mother_trucker from '../../assets/mother_trucker.png';
import notes from '../../assets/notes.png';
import employee_directory from '../../assets/employee_directory.png';
import travelers_compass from '../../assets/travelers_compass.png';
import travel_with_me from '../../assets/travel_with_me.png';

const Card = ({ id, title, description, repoLink, deployedLink, lastUpdated, picturePath }) => {
    let projectID = `0${id}`;
    let projects = [brew_for_you, daily_planner, eat_a_burger, employee_sys, mother_trucker, notes, employee_directory, travelers_compass, travel_with_me];
    let chosenProjectPic = projects.filter(project => project.includes(picturePath));

    return (
        <div className="card">
            <div className="card-body border border-info border-bottom-0">
                <div className="row">
                    <div className="col-lg-10 border-bottom border-info m-0">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="col-lg-2 border-bottom border-left border-info m-0 d-none d-lg-block">
                        <h3 className="card-title">{projectID}</h3>
                    </div>
                </div>
                <div className="row overflow-auto" style={{height: "110px"}}>
                    <p className="card-text p-2 text-justify">{description}</p>
                </div>
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">Click here for the Github Repo</a><small className="smallGrey" id="deployedLinkMsg"> or click the image for the deployed application</small>
                <p className="card-text"><small className="smallWord">Last updated on {lastUpdated}</small></p>
            </div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer"><img src={chosenProjectPic} className="card-img-bottom border border-info border-top-0" alt={title} /></a>
        </div>
    )
}

export default Card;

