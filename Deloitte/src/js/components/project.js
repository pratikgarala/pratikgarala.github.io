/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';

// Project component
const Project = (props) => (
    <div className="col-lg-3 project text-center">
        <img src={require("../../img/" + props.src)} alt={props.alt}/>
        <span className="projectTitle">{props.title}</span>
        <br />
        <span className="projectTagLine">{props.tagLine}</span>
    </div>
);

export default Project;