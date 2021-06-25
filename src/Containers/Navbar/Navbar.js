import React from "react";
import {
  container,
  logo,
  list,
  login,
  active,
  ul,
  barStyle,
  mobileMenu,
  desktopMenu,
  navbarLink,
} from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "../../images/Logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={container}>
      <div className={logo}>
        <img src={Logo} alt="Privia Security" />
      </div>
      <div className="bars" className={barStyle} onClick={onClickHandler}>
        <FontAwesomeIcon icon={faBars} width="100px" />
      </div>
      <div className={list}>
        <ul className={showMenu ? active : mobileMenu}>
          <li>
            <Link
              className={navbarLink}
              to="about"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="product"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="pricing"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="resources"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="customers"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Customers
            </Link>
          </li>
        </ul>
        <ul className={desktopMenu}>
          <li>
            <Link
              className={navbarLink}
              to="about"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="product"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="pricing"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="resources"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              className={navbarLink}
              to="customers"
              smooth={true}
              duration={1000}
              onClick={() => setShowMenu(false)}
            >
              Customers
            </Link>
          </li>
        </ul>
      </div>
      <div className={login}>
        <a href="#login">Login</a>
        <button>Start free trial</button>
      </div>
    </nav>
  );
};

export default Navbar;
