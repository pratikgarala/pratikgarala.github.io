/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';

//ImageCaption component
const ImageCaption = (props) => (
    <div className="imageCaption">
        <span className="title">{props.title}</span>
        <br />
        <span className="desc">{props.desc}</span>
    </div>
);

export default ImageCaption;