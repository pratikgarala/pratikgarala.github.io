/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';
import Project from '../components/project';

// MoreProjects component
const MoreProjects = (props) => (
    <div id="moreProjects">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="intro-text">
                    <span className="title">{props.title}</span>
                    <br />
                    <span className="tagLine">{props.tagLine}</span>
                    <br />
                </div>
            </div>
            <div className="col-lg-12 projects">
                <Project src="slide1.jpg" alt="slide 1" title="Project Name" tagLine="Lorem ipsum dolor sit amet"/>
                <Project src="slide1.jpg" alt="slide 1" title="Project Name" tagLine="Lorem ipsum dolor sit amet"/>
                <Project src="slide1.jpg" alt="slide 1" title="Project Name" tagLine="Lorem ipsum dolor sit amet"/>
                <Project src="slide1.jpg" alt="slide 1" title="Project Name" tagLine="Lorem ipsum dolor sit amet"/>
            </div>
        </div>
    </div>
);

export default MoreProjects;