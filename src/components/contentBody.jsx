import React, { useState, Fragment } from "react";
import "./contentBody.css";
import ppl from "../images/bg-attorney-ppc.jpg";
import ContactForm from "../components/common/contactForm";

function ContentBody() {
  const [content, setContent] = useState([
    { heading: "Orange, CA, Divorce Lawyers Will Fight For You" },
    {
      mainBody:
        "Making the decision to get a divorce is challenging. What comes next should not be. At The Law Offices of Saylin & Swisher, we have over 45 years of combined experience protecting the interests of people who are getting divorced in and around Orange, California. We specialize in cases involving complex property division and high net worth divorces. Let us work with you to obtain the best possible outcome in your case."
    }
  ]);
  return (
    <div className="mainBody">
      <div className="contentBody">
        <h1>{content[0].heading}</h1>
        <p>{content[1].mainBody}</p>
        <img src={ppl} />
      </div>
      <div className="contactForm">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContentBody;
