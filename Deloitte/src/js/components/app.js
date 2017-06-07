/**
 * Created by pratikgarala on 7/6/17.
 */

import React from 'react';

import MainSlider from '../components/mainSlider';
import TopHeader from '../components/topHeader';
import ProjectHeader from '../components/projectHeader';
import ImageCard from '../components/imageCard';
import InfoSection from '../components/infoSection';
import MainTitle from '../components/mainTitle';
import ImageCaption from '../components/imageCaption';
import MoreProjects from '../components/moreProjects';
import Footer from '../components/footer';

require('jquery');
require('bootstrap-webpack');
require('../sass/main.sass');

// put all the images in the img folder and provide the image name in src and its alternative in alt
//create a array of all the slider images
//only one image "slide1.jpg" is used for this template.
const sliderImages= [
    {
        src : 'slide1.jpg',
        alt : 'slide 1'
    },
    {
        src : 'slide1.jpg',
        alt : 'slide 1'
    },
    {
        src : 'slide1.jpg',
        alt : 'slide 1'
    },
    {
        src : 'slide1.jpg',
        alt : 'slide 1'
    },
    {
        src : 'slide1.jpg',
        alt : 'slide 1'
    },
];


// App component
const App = () => (
    <div>
        <div className="container">

            {/*top Header*/}
            <div className="col-lg-12">
                <TopHeader initial='D' projectTitle='Project Name'/>
            </div>

            {/*image slider -  pass slider image array as a property*/}
            <div className="col-lg-12">
                <MainSlider sliderImages={sliderImages}/>
            </div>

            {/*project header - pass title client name and desc*/}
            <div className="col-lg-12">
                <ProjectHeader title="Project Name" clientName="Client Name" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-12">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>

            {/*info section - pass the title and desc for info section, pass cssclass and cssclass for Title*/}
            <div className="col-lg-12">
                <InfoSection titleCss="infoTitleWhite" className="text-center" title="Blurb" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum. Morbi pellentesque aliquam odio a lacinia. Nulla at gravida eros, quis blandit ante. Sed convallis dolor vitae nisl aliquet pellentesque. Vivamus maximus quis diam sit amet blandit. Duis id malesuada ipsum. Curabitur ullamcorper felis et felis mollis ultricies. Morbi lobortis ipsum id risus gravida, et pharetra justo vestibulum."/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-12">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-6">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-6">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>
        </div>

        {/*section with white back ground*/}
        <div className="whiteBG">
            <div className="container">

                {/*info section - pass the title and desc for info section, pass cssclass and cssclass for Title*/}
                <div className="col-lg-6">
                    <InfoSection titleCss="infoTitleBlack" className="text-justify" title="Blurb" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum. Morbi pellentesque aliquam odio a lacinia. Nulla at gravida eros, quis blandit ante. Sed convallis dolor vitae nisl aliquet pellentesque. Vivamus maximus quis diam sit amet blandit. Duis id malesuada ipsum. Curabitur ullamcorper felis et felis mollis ultricies. Morbi lobortis ipsum id risus gravida, et pharetra justo vestibulum."/>
                </div>
                <div className="col-lg-6">
                    <img src={require("../img/slide1.jpg")} />
                </div>
            </div>
        </div>

        {/*more layouts section*/}
        <div className="container moreLayout">

            {/*main title - pass title name*/}
            <div className="col-lg-12 text-center">
                <MainTitle title="More Layouts"/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-12">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>

            {/*info section - pass the title and desc for info section, pass cssclass and cssclass for Title*/}
            <div className="col-lg-12">
                <InfoSection titleCss="infoTitleWhite" className="text-center" title="Blurb" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum. Morbi pellentesque aliquam odio a lacinia. Nulla at gravida eros, quis blandit ante. Sed convallis dolor vitae nisl aliquet pellentesque. Vivamus maximus quis diam sit amet blandit. Duis id malesuada ipsum. Curabitur ullamcorper felis et felis mollis ultricies. Morbi lobortis ipsum id risus gravida, et pharetra justo vestibulum."/>
            </div>

            {/*image caption - pass title and desc*/}
            <div className="col-lg-2 text-right">
                <ImageCaption title = "Image Caption" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum."/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-10">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>

            {/*image caption - pass title and desc*/}
            <div className="col-lg-2 text-right">
                <ImageCaption title = "Image Caption" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum."/>
                <ImageCaption title = "Image Caption" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis massa, at blandit justo. Vestibulum maximus dui ac massa ultrices interdum."/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-5">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>

            {/*image card with modal - pass name of the image in src and alternative in alt*/}
            <div className="col-lg-5">
                <ImageCard src="slide1.jpg" alt="slide 1"/>
            </div>
        </div>

        {/*separator line*/}
        <div className="separator" />

        {/*more projects */}
        <div className="container">
            <div className="col-lg-12">
                <MoreProjects title="More Projects" tagLine="Lorem ipsum dolor sit amet"/>
            </div>

            {/*footer*/}
            <Footer />
        </div>
    </div>
);


export default App;