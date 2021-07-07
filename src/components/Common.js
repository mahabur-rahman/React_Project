import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="banner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <div className="left-side">
                    <h2 className="fw-bold my-5">
                      {props.title}
                      <span className="text-primary">{props.titleTwo}</span>
                    </h2>
                    <p className="my-4">{props.para}</p>
                    <NavLink
                      to={props.visit}
                      className="btn btn-primary mb-5 mb-sm-0"
                    >
                      {props.btnText}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6  align-self-center">
                  <img
                    src={props.imgSrc}
                    alt={props.title}
                    className="img-fluid img-thumbnail animatedImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
