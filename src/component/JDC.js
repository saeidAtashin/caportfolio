import React from "react";
import backto from "../images/back icon.svg";
import Meta from "./Meta";
import BreadCrumb from "./BreadCrumb";

const JDC = () => {
  return (
    <>
      <div className="backto d-flex container-sm">
        <img src={backto} alt="backto" />
        <Meta title="JDC" /> <BreadCrumb title="JDC" />
      </div>
      <div className="overview-container container-sm">
        <div className="text-container">
          <h1>Project Overview</h1>
          <p>
            This project entails creating a visually striking website for a
            personal chef, featuring a dark theme with a minimalistic and simple
            design. The website will serve as a platform to showcase the chef's
            diverse culinary services and consultancy.
          </p>
        </div>
        <div className="img-container-jdc">
            <img src="/images/hompage1-1.png" alt="home Chef" className="img-fluid"/>
        </div>
      </div>
    </>
  );
};

export default JDC;
