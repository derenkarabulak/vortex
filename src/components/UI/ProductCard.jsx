import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Col lg="4" md="3" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            onClick={() => {
              navigate(`/product/${item.id}`);
              window.scrollTo(0, 0);
            }}
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt=""
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to={`/product/${item.id}`}
            >
              {item.productName}
            </Link>
          </h3>
          <span>{item.code}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
