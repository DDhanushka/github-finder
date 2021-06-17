import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Menu, Row, Col } from "antd";

const selected = {
  fontWeight: "bold",
  borderBottom: "2px solid",
};

export const Navbar = ({ icon, title }) => {
  // return (
  //   <nav className="navbar bg-primary">
  //     <h1>
  //       <i className={icon}></i> {title}
  //     </h1>
  //     <ul>
  // <NavLink activeStyle={selected} exact to="/">
  //   Home
  // </NavLink>
  //       <NavLink activeStyle={selected} exact to="/about">
  //         About
  //       </NavLink>
  //     </ul>
  //   </nav>
  // );

  return (
      <Menu theme="horizontal" mode="dark" defaultSelectedKeys={["1"]} style={{padding: '0 130px'}}>
        <Menu.Item key={1}>
          <NavLink exact to="/">
            <i class="fas fa-home"></i> Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key={2}>
          <NavLink exact to="/about">
            About
          </NavLink>
        </Menu.Item>
      </Menu>

  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
