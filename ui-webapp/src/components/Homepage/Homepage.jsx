import About from "../About/about";
import Contact from "../Contact/contacts";
import Banner from "../Slidebar/Banner";
import Testimonials from "../Testimonials/Testimonials";
import Portfolio from "../WHO_AM_I/Portfolio";
import Team from "../WHO_AM_I/team";
import Event from "../Event page/event"

import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import client from "../../client";

const Homepage = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
      
    client
      .fetch(
        `*[_type=="homepage"] {
            heroImage{
                asset->{
                    _id,
                     url
                    },
                 } ,
            aboutImage{
                asset->{
                    _id,
                    url
                    },
                 } ,
            aboutBody,
            whoWeAre

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
    <>
      <Banner heroImage={postData[0].heroImage.asset.url} />
      <About
        aboutHeading={postData[0].title}
        aboutBody={postData[0].aboutBody}
        aboutImage={postData[0].aboutImage.asset.url}
      />
      <Portfolio whoWeAreBody={postData[0].whoWeAre} />
      <Contact />
      <Testimonials />
      <Event />
      {/* <Team /> */}
    </>
  );
};

export default Homepage;
