/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';
import InfoSection from '../components/infoSection';

// ImageCard component
const ImageCard = (props) => (
    <div>
        <div className="imageCard" >
            <a href={"#imgModal" + props.src.substring(0,props.src.length - 4)} data-toggle="modal">
                <div className="openModal">
                    <span className="fa fa-2x fa-plus"></span>
                </div>
            </a>
            <img src={require("../../img/" + props.src)} alt={props.alt}/>
        </div>
        <div className="modal fade image-modal" id={"imgModal" + props.src.substring(0,props.src.length - 4)} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-content">
                <div className="closeModal" data-dismiss="modal">
                    <span className="fa fa-2x fa-close"></span>
                </div>
                <div className="img-content">
                    <InfoSection titleCss="infoTitleBlack" className="text-center" title="Blurb" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum. Morbi pellentesque aliquam odio a lacinia. Nulla at gravida eros, quis blandit ante. Sed convallis dolor vitae nisl aliquet pellentesque. Vivamus maximus quis diam sit amet blandit. Duis id malesuada ipsum. Curabitur ullamcorper felis et felis mollis ultricies. Morbi lobortis ipsum id risus gravida, et pharetra justo vestibulum."/>
                </div>
            </div>
        </div>
    </div>
);

export default ImageCard;
