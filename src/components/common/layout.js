import React from "react";
import "./layout.css";
import Header from "./header";
import Content from "../content";
const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Content />
    </div>
  );
};
export default Layout;
