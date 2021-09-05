import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlockContent from "@sanity/block-content-to-react";
import Team from "./team";

const Portfolio = ({ whoWeAreBody }) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-md-center">
          <div className="col-lg-6 col-12 " id="port-main">
            <h2 id="port-head">Who are we ?</h2>
            <BlockContent blocks={whoWeAreBody} />
          </div>

          <div className="col-lg-6 col-12" id="image_div">
            <div id="image-area"></div>
          </div>
        </div>
        <div className="line"></div>
        <Team />
      </div>
      <div className="break"></div>
    </>
  );
};

export default Portfolio;
