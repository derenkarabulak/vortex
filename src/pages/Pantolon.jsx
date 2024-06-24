import React, { useEffect, useState } from "react";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useTranslation } from "react-i18next";
import { Container, Row } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";

const Pantolon = () => {
  const [productsData, setProductsData] = useState("");
  const [t] = useTranslation("global");

  useEffect(() => {
    setProductsData(products.filter((item) => item.category === "Pantolon"));
  }, [products]);

  console.log(productsData);

  return (
    <Helmet title={t("products.pants")}>
      <CommonSection title={t("products.pants")} />
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

export default Pantolon;
