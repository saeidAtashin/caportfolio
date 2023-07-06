import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { brand, title } = props;

  return (
    <>
      <p className="text-color-back d-flex mb-0">
        <Link to="/" className="text-underline text-color-back">
          WORKS
        </Link>
        <div className="d-flex">
        &nbsp;  <span className="text-deco-none"> /</span> &nbsp;
          <span className="text-underline">{title}</span>
        </div>
      </p>
    </>
  );
};

export default BreadCrumb;
