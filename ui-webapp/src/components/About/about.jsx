import React, { Component } from "react";
import "./about.css";
import about_pic from "../Images/about.png";
import facebook from "../Images/facebook.png";
import discord from "../Images/discord.png";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container>
     
        
        <div className="aboutContent ">
          <div className="aboutDesc">
            <h1 className="text-center">About UI Visuals Community</h1>
             <div className="aboutSection row ">
            <div className="aboutImage col-lg-5 ">
          <img src={about_pic} alt="ui visuals" />
           </div>
            <p className="col-lg-7 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio totam amet magnam perferendis culpa, magni, in eum
              tenetur, pariatur nesciunt consequuntur dolor molestias. Rerum
              alias, illum harum quos aliquid veritatis ipsum dolor sit amet
              consectetur adipisicing elit. totam amet magnam perferendis culpa,
              magni, in eum tenetur, pariatur nesciunt consequuntur dolor
              molestias. Rerum alias, illum harum quos aliquid veritatis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio totam amet magnam perferendis culpa, magni, in eum
              tenetur, pariatur nesciunt consequuntur dolor molestias. Rerum
              alias, illum harum quos aliquid veritatis ipsum dolor sit amet
              consectetur adipisicing elit. totam amet magnam perferendis culpa,
              magni, in eum tenetur, pariatur nesciunt consequuntur dolor
              molestias. Rerum alias, illum harum quos aliquid veritatis!
            </p>

            <div className="aboutSocial text-center">
            <h2>Join Us Now</h2>
            <div>
              <a href="https://www.facebook.com/groups/440546053340638">
                <img src={facebook} />
              </a>
              <a href="https://discord.gg/wQCeqjQsUG">
                <img src={discord} />
              </a>
            </div>
          </div>
          </div>
          </div>
          
        </div>
      
    </Container>
  );
};

export default About;
