import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";

const Testimonials = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="testimonial"] [0...3] {
          mainImage{
            asset->{
                _id,
                 url
                },
             } ,
            title,
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
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="row text-center mx-auto bor">
          {postData &&
            postData.map((testimonial, index) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto my-3"
                key={index}
              >
                <div
                  className="card testimonial-card  mx-auto"
                  style={{
                    width: "20rem",
                    height: "24rem",
                    background: "#F2F2F2",
                  }}
                >
                  <div className="my-auto">
                    <div className="text-center mb-2">
                      <img
                        src={testimonial.mainImage.asset.url}
                        className="card-img-top"
                        alt={"Image for "+testimonial.title}
                        title={"Image for "+testimonial.title}
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <div className="pb-2">
                        <h5 className="card-title">{testimonial.title}</h5>
                        {/* <h6 className="text-muted testi-subHd">Lorem Ipsum</h6> */}
                      </div>
                      <p className="fw-normal testi-card-body">
                        <BlockContent blocks={testimonial.body} />
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

export default Testimonials;
