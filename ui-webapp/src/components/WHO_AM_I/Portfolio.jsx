import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row align-items-center justify-content-md-center">
            <div className="col-lg-6 col-12 " id="port-main">
              <h2 id="port-head">Who are we ?</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              Quisque vel efficitur quam, eu molestie odio. In hac habitasse
              platea dictumst. Integer diam sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              Quisque vel efficitur quam, eu molestie odio. In hac habitasse
              platea dictumst. Integer diam sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              Quisque vel efficitur quam, eu molestie odio. In hac habitasse
              platea dictumst. Integer diam sapien.
            </div>

            <div className="col-lg-6 col-12" id="image_div">
              <div id="image-area"></div>
            </div>
          </div>
          <div className="line"></div>

          <div className="row" style={{textAlign:"justify"}}>
            <div className="col-lg-4 ">
              <p className="sub-head text-center pt-4">LOREM IPSUM DOLOR</p>
              <div className="col-md" id="desc-items">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
                orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              
              </div>
            </div>

            <div className="col-lg-4 ">
              <p className="sub-head text-center pt-4">LOREM IPSUM DOLOR</p>
              <div className="col-md" id="desc-items">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
             
              </div>
            </div>
            <div className="col-lg-4 ">
              <p className="sub-head text-center pt-4">LOREM IPSUM DOLOR</p>
              <div className="col-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
                llamcorper condimentum ultrices. Cras euismod ornare laoreet.
                orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
             
              </div>
            </div>
          </div>
        </div>
        <div className="break"></div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
