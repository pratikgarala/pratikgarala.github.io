/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';

// Top Header Component
const TopHeader = (props) => (
    <div id="topHeader">
        <div className="row">
            <div className="col-sm-2">
                <div className="initialBox text-center">
                    <h5 className="initial">{props.initial}</h5>
                </div>
            </div>
            <div className="col-sm-10 text-right">
                <h6 className="projectTitle">{props.projectTitle}</h6>
            </div>
        </div>
    </div>
);

export default TopHeader;
