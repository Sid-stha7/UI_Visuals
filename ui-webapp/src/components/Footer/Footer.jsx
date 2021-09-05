import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { SocialIcon } from "react-social-icons";
import client from "../../client";
import "./Footer.css";
import { FaFacebook, FaDiscord, FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
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
    <div>
      <br />
      <br />
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row ">
            <div
              className="col-sm-3 text-center mb-4"
              style={{ color: "white", textAlign: "justify" }}
            >
              <h5 className="mt-4">UI/Visual Community</h5>

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

            <div className="col-sm-5 text-center" style={{ color: "white" }}>
              <hr className="d-sm-none"></hr>
              <h5 className="mt-4">Other Community</h5>
              <div>
                <a href="https://www.facebook.com/groups/414464819194468 ">
                  AI Learner
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/groups/736759720092121 ">
                  Creators
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/groups/642179072953677 ">
                  Game Dev
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/groups/857865105165454 ">
                  Biz Core
                </a>
              </div>
              <div className="d-sm-none text-end">
                <a href="#" style={{ fontSize: "2rem" }}>
                  {" "}
                  <FaArrowCircleUp />
                </a>
              </div>
            </div>

            <div className="col-sm-4 text-end d-none d-sm-block">
              <a href="#" style={{ fontSize: "2rem" }}>
                {" "}
                <FaArrowCircleUp />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Footer;
