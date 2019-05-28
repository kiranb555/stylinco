import React from "react";
import "./layout.css";
import Header from "./header";
import Content from "../content";
import Footer from "../common/footer";
const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default Layout;
