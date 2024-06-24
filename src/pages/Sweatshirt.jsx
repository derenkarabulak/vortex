import React, { useEffect, useState } from "react";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";

const Sweatshirt = () => {
  const [productsData, setProductsData] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [t] = useTranslation("global");

  useEffect(() => {
    setProductsData(products.filter((item) => item.category === "Sweatshirt"));
  }, [products]);

  console.log(productsData);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Sıfır Yaka Sweatshirt") {
      const filteredProducts = products.filter(
        (item) => item.productName === "Sıfır Yaka Sweatshirt"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Polo Yaka Sweatshirt") {
      const filteredProducts = products.filter(
        (item) => item.productName === "Polo Yaka Sweatshirt"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Kapüşonlu Sweatshirt") {
      const filteredProducts = products.filter(
        (item) => item.productName === "Kapüşonlu Sweatshirt"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Dik Yaka Sweatshirt") {
      const filteredProducts = products.filter(
        (item) => item.productName === "Dik Yaka Sweatshirt"
      );
      setProductsData(filteredProducts);
    }
  };

  return (
    <Helmet title={t("products.sweatshirt")}>
      <CommonSection title={t("products.sweatshirt")} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>{t("products.categories")}</option>
                  <option value="Sıfır Yaka Sweatshirt">
                    Sıfır Yaka Sweatshirt
                  </option>
                  <option value="Polo Yaka Sweatshirt">
                    Polo Yaka Sweatshirt
                  </option>
                  <option value="Kapüşonlu Sweatshirt">
                    Kapüşonlu Sweatshirt
                  </option>
                  <option value="Dik Yaka Sweatshirt">
                    Dik Yaka Sweatshirt
                  </option>
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
    </Helmet>
  );
};

export default Sweatshirt;
