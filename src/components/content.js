import React from "react";
import "./content.css";
import banner from "../images/bg-banner-ppc.jpg";
import ContentBody from "./contentBody";

const Content = () => {
  return (
    <div className="banner">
      <img src={banner} />
      <ContentBody />
    </div>
  );
};

export default Content;
