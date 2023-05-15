import React from "react";
import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  textDecoration: "none",
  fontSize: "25px",
  backgroundColor: isActive ? "#343a40" : "",
  color: isActive ? "white" : "#343a40",
});
export const MainNav = () => {
  return (
    <div className="sideNav-div">
      <div className="mail-heading">My Mail Service</div>
      <div className="navigation">
        <NavLink className="navLink" style={getActiveStyle} to="/">
          Inbox
        </NavLink>
        <NavLink className="navLink" style={getActiveStyle} to="/trash">
          Trash
        </NavLink>
        <NavLink className="navLink" style={getActiveStyle} to="/spam">
          Spam
        </NavLink>
      </div>
    </div>
  );
};
