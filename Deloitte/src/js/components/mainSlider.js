/**
 * Created by pratikgarala on 13/4/17.
 */

import React from 'react';

// MainSlider component
const MainSlider = (props) => (
    <div id="mainSlider">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/*<!-- Indicators -->*/}
            {props.sliderImages && props.sliderImages.length > 0 ? (
                <ol className="carousel-indicators">
                    {props.sliderImages.map((image, index) => {
                        if (index == 0)
                            return (<li key={index} data-target="#myCarousel" data-slide-to={index} className="active" />);
                        else
                            return (
                                <li key={index} data-target="#myCarousel" data-slide-to={index}/>
                            );
                    })}
                </ol>
            ) : null}

            {/*<!-- Wrapper for slides -->*/}
            {props.sliderImages && props.sliderImages.length > 0 ? (
                <div className="carousel-inner">
                    {props.sliderImages.map((image, index) => {
                        if (index == 0)
                            return (
                                <div key={index} className="item active">
                                    <img src={require('../../img/' + image.src)} alt={image.alt} />
                                </div>
                            );
                        else
                            return (
                                <div key={index} className="item">
                                    <img src={require('../../img/' + image.src)} alt={image.alt} />
                                </div>
                            );
                    })}
                </div>
            ) : null}

            {/*<!-- Left and right controls -->*/}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="fa fa-2x fa-chevron-left" />
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="fa fa-2x fa-chevron-right" />
            </a>
        </div>
    </div>
);

export default MainSlider;


