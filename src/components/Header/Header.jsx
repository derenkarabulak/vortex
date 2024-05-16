import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo-w.jpg";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [categoryOpen, setCategoryOpen] = useState(false);

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();
    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  });

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                onClick={() => {
                  navigate("/home");
                  window.scrollTo(0, 0);
                }}
              />
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className={"menu"}>
                <li className="nav__item">
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to="/home"
                    className="nav__active"
                  >
                    Anasayfa
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to="/products"
                    className="nav__active"
                  >
                    Ürünler
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to="/about"
                    className="nav__active"
                  >
                    Hakkımızda
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
