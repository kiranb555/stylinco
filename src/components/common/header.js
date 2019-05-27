import React, { useState } from "react";
import "./header.css";
import brand from "../../images/brand-ppc.png";

const Header = () => {
  const [heading, setHeading] = useState({
    phone: "714-750-9264",
    details: "Talk to the Divorce Attorney Today"
  });
  return (
    <div className="header">
      <div className="logo">
        <img src={brand} />
      </div>
      <div className="contact">
        <div>{heading.details}</div>
        <div>{heading.phone}</div>
      </div>
    </div>
  );
};

export default Header;
