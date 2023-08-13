import React from "react";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className='container-fluid bg-light'>
      <NavigationBar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default RootLayout;
