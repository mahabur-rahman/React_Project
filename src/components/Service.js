import React from "react";
import Card from "./Card";
import Data from "./Data";

const Service = () => {
  return (
    <>
      <section id="service" className="py-5">
        <div className="container">
          <h2 className="text-capitalize fw-bold display-6 text-center mb-5">
            Our services
          </h2>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row gy-4">
                {Data.map((item, index) => {
                  return (
                    <Card key={index} title={item.title} imgSrc={item.imgSrc} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
