import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo-w.jpg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
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

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
                    {t("header.home")}
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
                    {t("header.products")}
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
                    {t("header.about")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <div className="profile">
                <button className="lang" onClick={() => handleLanguage("tr")}>
                  TR
                </button>
                <button className="lang" onClick={() => handleLanguage("en")}>
                  EN
                </button>
              </div>
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
