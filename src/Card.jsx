import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js"
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card my-3 mx-auto" style={{ width: "18rem" }}>
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body custom_bg">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
             A master Brilliant course for <strong>{props.title}</strong> to make the proficient among your peers. 
            </p>
            <NavLink to="/service" className="btn btn-custom">
              Get the Course
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};


export default Card;