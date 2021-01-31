import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { NavLink } from "react-router-dom";
import Footer from './Footer';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto main-header">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                  </h1>
                  <h2>
                    {props.subTitle}
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.buttonLink}
                      className="btn btn-get-started"
                      style={props.buttonColor}
                    >
                      {props.button}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 bannerImg d-flex justify-content-center ">
                  <img src={props.imgSrc} alt="" />
                </div>
              </div>
            </div>
        <Footer />

          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
