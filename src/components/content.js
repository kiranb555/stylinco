import React, { useState } from "react";
import "./content.css";
import banner from "../images/bg-banner-ppc.jpg";
import ContentBody from "./contentBody";
import Card from "./common/card";
const Content = () => {
  const [textArea, setTextArea] = useState([
    {
      heading: "Complex Property Division ",
      content:
        "The financial consequences of complex property division issues can be significant. Whether you are dividing a jointly owned business or assets in real estate, we will work with you to delineate between community property and separate property, and to obtain an equitable outcome."
    },
    {
      heading: "High Net Worth Divorce",
      content:
        "Our high net worth divorce attorneys are well-versed in working with individuals with significant assets. We will focus on the unique assets in your case, including executive compensation plans, retirement and pension funds, and employee profit-sharing plans. "
    },
    {
      heading: "Protect Your Interests When Filing For Divorce ",
      lowerContent:
        "After deciding to get a divorce, you need a team of experienced legal professionals on your side to ensure your rights are protected throughout the process. Our family law attorneys are prepared to work with you on all aspects of your case, including issues involving property division, child custody and child support. Contact the divorce lawyers at The Law Offices of Saylin & Swisher to discuss the specifics of your case."
    }
  ]);
  return (
    <div className="banner">
      <img src={banner} />
      <ContentBody />
      <div className="flexArea">
        <Card
          bgcolor="#cec7a9"
          heading={textArea[0].heading}
          content={textArea[0].content}
        />
        <Card
          bgcolor="#eadfc2"
          heading={textArea[1].heading}
          content={textArea[1].content}
        />
      </div>
      <div className="lower-content">
        <h1>{textArea[2].heading}</h1>
        <p>{textArea[2].lowerContent}</p>
      </div>
    </div>
  );
};

export default Content;
