import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";

const Team = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="events"] {
                    heading,
                    body
  
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
    <div className="row align-items-center">
      {postData &&
        postData.map((events, index) => (
          <div className="col-md" key={index}>
            <span className="sub-head">{events.heading}</span>
            <div className="col-md" id="desc-items">
              <BlockContent blocks={events.body} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Team;
