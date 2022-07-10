import React from "react";

import NavbarMenu from "../components/NavbarMenu";
import PageTransition from "../components/PageTransition";
import SocialMedia from "../components/SocialMedia";

import { Outlet } from "react-router-dom";

import "./index.css";

const Layout = () => {
  return (
    <div className="container-layout">
      <header>
        <NavbarMenu />
      </header>
      <main>
        <PageTransition>
          <Outlet />
          <SocialMedia />
        </PageTransition>
      </main>
    </div>
  );
};

export default Layout;
