import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, Container, Row } from "react-responsive-carousel";
import Button from "react-bootstrap/Button";
import designer from "./designer.png";

import "./simpleslider.css";

const Banner = ({heroImage}) => {
  return (
    <div className="slider-div">
      <section id="header" className="banner-section">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 prder-lg-1 text-box">
                  <h1>
                    Welcome to{" "}
                    <strong className="brand-name">UI Visuals Community</strong>
                  </h1>
                  <div className="mt-3">
                    <button className="hero-button btn btn-outline-success">
                      View Events
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={heroImage}
                    className="img-fluid-animated hero-img"
                    alt="hero image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
