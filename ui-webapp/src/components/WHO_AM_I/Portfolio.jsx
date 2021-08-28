import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="row align-items-center justify-content-md-center">
            <div class="col-lg-6 col-12 " id="port-main">
              <h2 id="port-head">Who are we ?</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              Quisque vel efficitur quam, eu molestie odio. In hac habitasse
              platea dictumst. Integer diam sapien.
            </div>

            <div class="col-lg-6 col-12" id="image_div">
              <div id="image-area"></div>
            </div>
          </div>
          <div class="line"></div>

          <div class="row align-items-center">
            <div class="col-md ">
              <span class="sub-head">LOREM IPSUM DOLOR</span>
              <div class="col-md" id="desc-items">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              </div>
            </div>

            <div class="col-md ">
              <span class="sub-head">LOREM IPSUM DOLOR</span>
              <div class="col-md" id="desc-items">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
              </div>
            </div>
            <div class="col-md ">
              <span class="sub-head">LOREM IPSUM DOLOR</span>
              <div class="col-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
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
