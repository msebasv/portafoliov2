import React from "react";

import NavbarMenu from "../components/NavbarMenu";

import { Outlet } from "react-router-dom";

import "./index.css";

const Layout = () => {
  return (
    <div className="container-layout">
      <header>
        <NavbarMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
