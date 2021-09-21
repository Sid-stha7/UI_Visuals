import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";

const Team = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="team"]  {
          memberImg{
            asset->{
                _id,
                 url
                },
             } ,
            member,
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
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12s mb-5 bor">
            <h2>Team Members</h2>
          </div>
        </div>
        
        <div className="row text-center ">
          {postData &&
            postData.map((team, index) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 my-3"
                key={index}
              >
                <div
                  className="card teams-card  mx-auto"
                  style={{

                    background: "#F2F2F2",
                  }}
                >
                  <div className="my-auto">
                    <div className="text-center mb-2">
                      <img
                        src={team.memberImg.asset.url}
                        className="card-img-top"
                        alt={"Image of "+team.member}
                        title={"Image of "+team.member}
                      />
                    </div>
                    <div className="card-body">
                      <div className="pb-2">
                        <h5 className="card-title">{team.member}</h5>
                        {/* <h6 className="text-muted testi-subHd">Lorem Ipsum</h6> */}
                      </div>
                      <p className="fw-normal testi-card-body text-start">
                        <BlockContent blocks={team.body} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Team;
