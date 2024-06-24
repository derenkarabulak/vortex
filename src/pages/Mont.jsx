import React, { useEffect, useState } from "react";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useTranslation } from "react-i18next";
import { Container, Row } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";

const Mont = () => {
  const [productsData, setProductsData] = useState("");
  const [t] = useTranslation("global");

  useEffect(() => {
    setProductsData(products.filter((item) => item.category === "Mont"));
  }, [products]);

  console.log(productsData);

  return (
    <Helmet title={t("products.mont")}>
      <CommonSection title={t("products.mont")} />
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

export default Mont;
