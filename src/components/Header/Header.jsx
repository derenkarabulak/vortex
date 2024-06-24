import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { Col, Container, Row } from "reactstrap";
import logo from "../../assets/images/logo-w.jpg";
import { useTranslation } from "react-i18next";
import Dropdown from "../UI/Dropdown";

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

  const handleFilter = (value) => {
    navigate(value);
  };

  const categoryOptions = [
    { value: "/mont", label: t("products.mont") },
    { value: "/softshell-mont", label: t("products.softshell") },
    { value: "/kaban", label: t("products.kaban") },
    { value: "/is-ceketi", label: t("products.isceketi") },
    { value: "/sweatshirt", label: t("products.sweatshirt") },
    { value: "/pantolon", label: t("products.pants") },
    { value: "/polar", label: t("products.polar") },
    { value: "/tshirt", label: t("products.tshirt") },
    { value: "/vest", label: t("products.vest") },
  ];

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
                <li className="nav__item">
                  <Dropdown
                    options={categoryOptions}
                    onChange={handleFilter}
                    defaultLabel={t("products.categories")}
                  />
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
