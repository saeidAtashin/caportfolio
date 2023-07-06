import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-wrap">
        <div className="img-container">
        <Link to="/jdc">
          <img src="./images/hompage1-1.png" alt="jef de" className="jpg-100" />
          </Link>
        </div>
        <div className="img-container">
          <img src="./images/hompage2.png" alt="jef de" className="jpg-100" />
        </div>
        <div className="img-container">
          <img src="./images/hompage3.png" alt="jef de" className="jpg-100" />
        </div>
        <div className="img-container">
          <img src="./images/hompage4.jpg" alt="jef de" className="jpg-100 " />
        </div>
        <div className="img-container">
          <img src="./images/hompage5.jpg" alt="jef de" className="jpg-100 " />
        </div>
        <div className="img-container">
          <img src="./images/hompage6.png" alt="jef de" className="jpg-100 " />
        </div>
        <div className="img-container">
          <img src="./images/hompage7.jpg" alt="jef de" className="jpg-100" />
        </div>
        <div className="img-container">
          <img src="./images/hompage8.png" alt="jef de" className="jpg-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
