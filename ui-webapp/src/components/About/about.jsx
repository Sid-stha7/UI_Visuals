import React, { Component, useState, useEffect } from "react";
import "./about.css";
import facebook from "../Images/facebook.png";
import discord from "../Images/discord.png";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BlockContent from "@sanity/block-content-to-react";
import PuffLoader from "react-spinners/PuffLoader";
import { SocialIcon } from "react-social-icons";
import client from "../../client";

const About = ({ aboutBody, aboutImage }) => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="social"] {
          siteTitle,    
          siteURL
      }`
      )
      .then((data) => setPost(data))

      .catch(console.error);
  }, []);
  if (!postData)
    return (
      <div className="loader text-center my-auto">
        <PuffLoader size={60} />
      </div>
    );
    
  return (
    <Container>
      <section className="aboutSection">
        <div className="aboutImage">
          <img src={aboutImage} alt="Image of UI Visuals Community" />
        </div>
        <div className="aboutContent">
          <div className="aboutDesc">
            <h1>About UI Visuals Community</h1>

            <div>
              <BlockContent blocks={aboutBody} />
            </div>
          </div>
          <div className="aboutSocial">
            <h2>Join Us Now</h2>
            <div>
              {postData &&
                postData.map((social, index) => (
                  <span key={index}>
                    <SocialIcon
                      url={social.siteURL}
                      className="swing mx-2 my-1"
                      target="_blank"
                      fgColor="#fff"
                      title={social.siteTitle}
                    />
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
