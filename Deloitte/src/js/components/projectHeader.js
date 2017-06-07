/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';
import MainTitle from '../components/mainTitle';

// ProjectHeader component
const ProjectHeader = (props) => (
    <section id="projectHeader">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="intro-text">
                    <MainTitle title={props.title}/>
                    <br />
                    <span className="clientName">Service Offering </span>
                    <span className="tagLine" >for </span>
                    <span className="clientName">{props.clientName}</span>
                    <br />
                    <br />
                    <span className="projectDesc">{props.desc}</span>
                </div>
            </div>
            <div className="col-lg-12 text-center">
                <a href="#inviteModal" className="btn btn-default" data-toggle="modal">Visit Site</a>
            </div>
        </div>
    </section>
);

export default ProjectHeader;
