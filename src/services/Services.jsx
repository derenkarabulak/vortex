import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "../services/services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t] = useTranslation("global");

  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="3" md="4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="service__item"
              style={{ background: `${t("services.bgone")}` }}
            >
              <span>
                <i className={t("services.iconone")}></i>
              </span>
              <div>
                <h3>{t("services.titleone")}</h3>
                <p>{t("services.subtitleone")}</p>
              </div>
            </motion.div>
          </Col>
          <Col lg="3" md="4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="service__item"
              style={{ background: `${t("services.bgtwo")}` }}
            >
              <span>
                <i className={t("services.icontwo")}></i>
              </span>
              <div>
                <h3>{t("services.titletwo")}</h3>
                <p>{t("services.subtitletwo")}</p>
              </div>
            </motion.div>
          </Col>
          <Col lg="3" md="4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="service__item"
              style={{ background: `${t("services.bgthree")}` }}
            >
              <span>
                <i className={t("services.iconthree")}></i>
              </span>
              <div>
                <h3>{t("services.titlethree")}</h3>
                <p>{t("services.subtitlethree")}</p>
              </div>
            </motion.div>
          </Col>
          <Col lg="3" md="4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="service__item"
              style={{ background: `${t("services.bgfour")}` }}
            >
              <span>
                <i className={t("services.iconfour")}></i>
              </span>
              <div>
                <h3>{t("services.titlefour")}</h3>
                <p>{t("services.subtitlefour")}</p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
