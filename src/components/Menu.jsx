import React from "react";
import "../styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to={"/orders"} className="title">
            My orders
          </Link>
        </li>
        <li>
          <Link to={"/account"}>My account</Link>
        </li>
        <li>
          <Link to={"/login"}>Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
