import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import './simpleslider.css';

export default class TestSlider extends Component {
    render() {
        return(
            
            <div>
                <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} showArrows={true}>
                    <div className="image">
                        <img src="./slider-images/ui_slider1.jpg" alt="image"/>
                    </div>
                    <div className="image">
                        <img src="./slider-images/slider2.jpg" alt="image"/>
                    </div>
                    <div className="image">
                        <img src="./slider-images/slider4.jpg" alt="image"/>
                    </div>
                </Carousel>
            </div>
        );
    }
}