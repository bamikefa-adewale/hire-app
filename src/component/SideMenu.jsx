import React from "react";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <div>
      <ul className="SideMenu">
        <li to="/"> Home</li>
        <li to="/"> Favorites</li>
      </ul>
    </div>
  );
};
