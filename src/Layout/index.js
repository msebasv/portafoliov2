import React from "react";

import NavbarMenu from "../components/NavbarMenu";
import PageTransition from "../components/PageTransition";
import SocialMedia from "../components/SocialMedia";

import { Outlet } from "react-router-dom";

import "./index.scss";

const Layout = () => {
  return (
    <div className="container-layout">
      <header className="header-layout">
        <NavbarMenu />
      </header>
      <main className="main-layout">
        <PageTransition>
          <Outlet />
          <SocialMedia />
        </PageTransition>
      </main>
    </div>
  );
};

export default Layout;
