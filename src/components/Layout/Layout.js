import React from "react";
import Header from "../Head-Foot/Header";
import Footer from "../Head-Foot/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <div>{children}</div> */}
      <Footer />
    </div>
  );
};

export default Layout;
