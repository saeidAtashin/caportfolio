import React from "react";
import backto from "../images/back icon.svg";
import Meta from "./Meta";
import BreadCrumb from "./BreadCrumb";

const JDC = () => {
  return (
    <>
      {" "}
      <div className="backto d-flex container-sm">
        <img src={backto} alt="backto" />
        <Meta title="JDC" />
        <BreadCrumb title="JDC" />
      </div>{" "}
      <div className="overview-container container-sm">
        {" "}
        <div className="text-container">
          <h1>Project Overview</h1>
          <p>
            This project entails creating a visually striking website for a
            personal chef, featuring a dark theme with a minimalistic and simple
            design. The website will serve as a platform to showcase the chef's
            diverse culinary services and consultancy.
          </p>
        </div>{" "}
        <div className="img-container-jdc">
          {" "}
          <img
            src="/images/hompage1-1.png"
            alt="home Chef"
            className="img-fluid mb-00"
          />{" "}
        </div>
      </div>{" "}
      <div className="overview-container container-sm">
        <div className=" text-container2">
          <h1>Color Palette</h1>
          <p>
            The website utilizes a carefully selected color palette consisting
            of dark tones. Dark greys create depth and elegant atmosphere, while
            mustard yellow adds warmth and luxury as a highlight color.
            <br />
            The color choices, combined with a dark glass effect, contribute to
            a visually pleasing and minimalistic design .
          </p>
          <div className="d-flex flend">
            <div>
              <div className="color1 rel-color-position">
                <p>#212121</p>
              </div>
              <div className="color2 rel-color-position">
                <p>#2E2E2E</p>
              </div>
              <div className="color3 rel-color-position">
                <p>#BA8A3A</p>
              </div>
              <div className="color4 rel-color-position">
                <p>#CECECE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-container-jdc">
          <img
            src="/images/chef2.png"
            alt="home Chef 2"
            className="img-fluid mb-00"
          />
        </div>
      </div>{" "}
    </>
  );
};

export default JDC;
