import React from "react";

import Footer from "./components/Footer";
const Layout1 = (props) => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout1;
