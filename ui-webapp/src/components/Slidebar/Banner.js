import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel, Container, Row} from "react-responsive-carousel";
import Button from 'react-bootstrap/Button';
import designer from "./designer.png";

import './simpleslider.css';

class Banner extends React.Component {
    render() {
        return(
            <div className="slider-div">
                <section id = "header" className="banner-section">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 prder-lg-1 text-box text-center">
                                        <h1>
                                            Welcome to <strong className="brand-name">UI Visuals Community</strong>
                                        </h1>
                                        
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src = {designer} className="img-fluid-animated hero-img" alt="hero image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div> 
        );
    }
}

export default Banner;



