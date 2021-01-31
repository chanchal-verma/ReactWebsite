import React from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js"
import banner5 from "./Images/banner5.jpg";
import Common from './Common'


const buttonStyle = {
    border: "3px solid #3498db"
}


const About = (props)=>{
    return (
        <>
        <Common 
            title={[<strong  style={{color:props.color}}>Techno.LAB </strong>, "is an award-winning hub of more than two million"]}
            subTitle={<strong style={{color:props.color}}>entrepreneurs, business owners, influencers and experts</strong>}
            button="Contact Us"
            imgSrc={banner5}
            buttonLink="/Contact"
            buttonColor={buttonStyle} />
        </>
    );
}

export default About;