import React from "react";
import { Outlet } from "react-router";
import Navbar from "./cli/common/Navbar";
import Footer from "./cli/common/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
