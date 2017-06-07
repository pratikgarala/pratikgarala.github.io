/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';

// InfoSection component
const InfoSection = (props) => (
    <section className="infoSection">
        <div className="row">
            <div className={"col-lg-12 " + props.className}>
                <div className="intro-text">
                    <span className={props.titleCss}>{props.title}</span>
                    <br />
                    <br />
                    <span className="infoDesc">{props.desc}</span>
                </div>
            </div>
        </div>
    </section>
);

export default InfoSection;