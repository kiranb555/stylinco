import React, { useState, Fragment } from "react";
import "./footer.css";

function Footer() {
  const [Details, setDetails] = useState([
    {
      name: "The Law offices of stylin & swisher",
      address: "625 The city Drive SSouth",
      city: "Orange , CA 92866",
      ph: "714-750-9264",
      map: "Map and direction"
    }
  ]);
  const span = <span>|</span>;
  return (
    <Fragment>
      <div className="footer1">
        <div className="footer-details">
          <div>{Details[0]["name"]} </div> {span}
          <div>{Details[0]["address"]} </div>
          {span}
          <div>{Details[0]["city"]}</div> {span}
          <div>{Details[0]["ph"]} </div> {span}
          <div>{Details[0]["map"]}</div>
        </div>
        <div className="footer-nav">
          <div>Home</div>
          {span}
          <div>About our firm</div>
          {span}
          <div>Contact Us</div>
        </div>
        <div />
      </div>
      <div className="footer2">
        <div className="content-1">
          <div>© 2019 by Kiran. All rights reserved.</div>
          <div>Disclaimer</div>
          {span}
          <div>Site map</div>
          {span}
          <div>Privacy policy</div>
          {span}
          <div> Legal Marketing® by FindLaw</div>
        </div>
        <div className="content-2">
          At The Law Offices of Saylin & Swisher, we will fight to obtain the
          best possible outcome during your divorce. Contact us at{" "}
          {Details[0]["ph"]}.
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
