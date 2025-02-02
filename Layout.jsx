import React from "react";
import Header from "./Header.JSX";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;