import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/herobg.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import counterImg from "../assets/images/hero-img.png";
import Clock from "../components/UI/Clock";
import { useNavigate } from "react-router-dom";
import product from "../assets/data/products";
import { useTranslation } from "react-i18next";
import products from "../assets/data/products";

const Home = () => {
  const [productsData, setProductsData] = useState("");

  const navigate = useNavigate();

  const [t] = useTranslation("global");

  const year = new Date().getFullYear();

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "İş Ceketi") {
      const filteredProducts = products.filter(
        (item) => item.category === "İş Ceketi"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Mont") {
      const filteredProducts = products.filter(
        (item) => item.category === "Mont"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Softshell Mont") {
      const filteredProducts = products.filter(
        (item) => item.category === "Softshell Mont"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Kaban") {
      const filteredProducts = products.filter(
        (item) => item.category === "Kaban"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Sweatshirt") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sweatshirt"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Pantolon") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pantolon"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Polar") {
      const filteredProducts = products.filter(
        (item) => item.category === "Polar"
      );
      setProductsData(filteredProducts);
    }
  };

  return (
    <Helmet title={"Home"}>
      <section
        className="hero__section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  {year} - {t("home.slogan")}
                </p>
                <h2>{t("home.head")}</h2>
                <p>{t("home.homeinfo")}</p>
                <motion.button
                  onClick={() => {
                    navigate("/products");
                    window.scrollTo(0, 0);
                  }}
                  whileTap={{ scale: 1.2 }}
                  className="shop__btn"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to="/products"
                  >
                    {t("home.productbtn")}
                  </Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>{t("products.categories")}</option>
                  <option value="Mont">{t("products.mont")}</option>
                  <option value="Softshell Mont">
                    {t("products.softshell")}
                  </option>
                  <option value="Kaban">{t("products.kaban")}</option>
                  <option value="İş Ceketi">{t("products.isceketi")}</option>
                  <option value="Sweatshirt">{t("products.sweatshirt")}</option>
                  <option value="Pantolon">{t("products.pants")}</option>
                  <option value="Polar">{t("products.polar")}</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4 text-white">
                {t("products.noproducts")}
              </h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
      {/* <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">{t("home.limited")}</h4>
                <h3 className="text-white fs-5 mb-3">{t("home.head")}</h3>
              </div>
              <Clock />
              <motion.button
                onClick={() => navigate("/products")}
                whileTap={{ scale: 1.2 }}
                className="shop__btn store__btn"
              >
                <Link to="/products">{t("home.productbtn")}</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
