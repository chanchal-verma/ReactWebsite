import React from "react";
import SData from "./SData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js"
import Card from './Card'
import Footer from './Footer'

const Service = () => {
  return (
    <>
      <section className="services">
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto mb-5">
              <div className="row">
                  {SData.map((val , index)=>{
                     return  (<Card 
                      key={index}
                      imgsrc={val.imgsrc}
                      title={val.title}/>)
                  })}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
