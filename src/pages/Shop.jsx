import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const [t] = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title={t("header.products")}>
      <CommonSection title={t("header.products")} />

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
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder={t("shop.search")}
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">{t("products.noproducts")}</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
