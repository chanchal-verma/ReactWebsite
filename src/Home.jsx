import React, { useState } from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js"
import banner3 from "./Images/banner3.jpg";
import Common from './Common'


const buttonStyle = {
  border: "3px solid #b7a105"
} 

const Home = (props) => {

  return (
    <>
     <Common 
     title={["Grow Your Business with",<strong style={{ color: props.color }}>Techno.LAB </strong> ,"hands in Support"]}
     subTitle={<strong style={{ color: props.color }}>We are a Team of talented developers for developing websites</strong>}
     button="Get Started"
     imgSrc={banner3}
     buttonLink="/Service"
     buttonColor={buttonStyle} />
    </>
  );
};

export default Home;
