import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assests/Qsipers new logo.png";

const Dashboard = () => {
  return (
    <>
      <nav id="mainNavBar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="addemp">Add Employee </NavLink>
          <NavLink to="viewall"> View All</NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
