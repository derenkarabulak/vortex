import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const { imgUrl, productName, category, code, description } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="img URL" className="product__img" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{category}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span>{code}</span>
                </div>
                <p className="mt-3">{description}</p>
                <p
                  className="mt-5"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  **Detaylı bilgi için müşteri temsilcisi ile görüşünüz.
                </p>
              </div>
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">Bunları da beğenebilirsiniz..</h2>
            </Col>
            <ProductsList
              data={relatedProducts}
              className="related__products"
            />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
