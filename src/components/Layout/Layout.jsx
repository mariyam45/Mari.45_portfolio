// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../Profile/Profile";
import SideNav from "../SideNav/SideNav";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="screen grid-cols-1 md:grid-cols-[3fr_8fr_1fr]">
      <Profile id="profile"></Profile>
      <Outlet></Outlet>
      <SideNav></SideNav>
    </div>
  );
};

export default Layout;
