import React from "react";
import backto from "../images/back icon.svg";
import Meta from "./Meta";
import BreadCrumb from "./BreadCrumb";
import Suggest from "./Suggest";

const JDC = () => {
  return (
    <>
      <div className="backto d-flex container-xl">
        <img src={backto} alt="backto" />
        <Meta title="JDC" />
        <BreadCrumb title="JDC" />
      </div>
      <div className="overview-container container-xl">
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
          <img
            src="/images/hompage1-1.png"
            alt="home Chef"
            className="img-fluid mb-00"
          />
        </div>
      </div>
      <div className="overview-container container-xl">
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
      </div>

      <div className="overview-container container-xl">
        <div className="text-container">
          <h1>Typography</h1>
          <p className="width-p3">
            The website employs two fonts: Playball Pro and Nunito. <br />
            Playball Pro is chosen for its playful and elegant characteristics,
            reflecting the chef's creativity and passion, <br />
            Nunito, on the other hand, is selected for its clean and modern
            aesthetic, providing excellent readability. <br />
            Its versatility and simplicity align with the simple design of the
            website, enhancing the user experience.
          </p>
        </div>
        <div className="d-flex typo-style">
          <div className="width-typography">
            <p>TYPEFACE : NUNITO</p>
            <div className="box">
              <p className="left-p">
                <div>Aa</div> <div>Bb</div> <div>Cc</div> <div>Dd</div>
                <div>Ee</div> <div>Fe</div> <div>Gg</div> <div>Hh</div>
                <div>Ii</div> <div>Jj</div> <div>Kk</div> <div>Ll</div>
                <div>Mm</div> <div>Nn</div> <div>Oo</div> <div>Pp</div>
                <div>Qq</div> <div>Rr</div> <div>Ss</div> <div>Tt</div>
                <div>Uu</div>
                <div>Vv</div> <div>Ww</div> <div>Xx</div> <div>Yy</div>
                <div>Zz</div>
              </p>
              <p className="second-left-p">
                <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
                <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>0</div>
                <div>!</div> <div>@</div> <div>#</div> <div>$</div> <div>%</div>
                <div>^</div> <div>&</div> <div>*</div> <div>(</div> <div>)</div>
                <div>-</div>
              </p>
            </div>
          </div>
          <div className="width-typography">
            <p>TYPEFACE : PLAYBALL</p>
            <div className="box">
              <p className="first-p">
                <div>Aa</div> <div>Bb</div> <div>Cc</div> <div>Dd</div>
                <div>Ee</div> <div>Fe</div> <div>Gg</div> <div>Hh</div>
                <div>Ii</div> <div>Jj</div> <div>Kk</div> <div>Ll</div>
                <div>Mm</div> <div>Nn</div> <div>Oo</div> <div>Pp</div>
                <div>Qq</div> <div>Rr</div> <div>Ss</div> <div>Tt</div>
                <div>Uu</div>
                <div>Vv</div> <div>Ww</div> <div>Xx</div> <div>Yy</div>
                <div>Zz</div>
              </p>
              <p className="second-p">
                <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
                <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>0</div>
                <div>!</div> <div>@</div> <div>#</div> <div>$</div> <div>%</div>
                <div>^</div> <div>&</div> <div>*</div> <div>(</div> <div>)</div>
                <div>-</div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-container container-xl">
        <div className="text-container">
          <h1>Full Preview</h1>
          <div className="d-flex f-p-b" >
          <p className="full-preview-p">
            This website design project captures the essence of simplicity,
            functionality, and clarity, reflecting the creativity and passion of
            a skilled chef. By incorporating primary colors, utilizing an
            appropriate typeface, and implementing grid-based layouts, the
            design exudes visual appeal while providing a seamless user
            experience. These elements harmoniously showcase a modern and
            innovative brand image. To access the design of the homepage, you
            can download it as a PNG file.
          </p>
          <button className="button">DOWNLOAD</button>
          </div>
        </div>
        <div className="img-container-jdc">
          <img
            src="/images/chef3.png"
            alt="home Chef"
            className="img-fluid mb-00"
          />
        </div>
      </div>

      <Suggest />
    </>
  );
};

export default JDC;
