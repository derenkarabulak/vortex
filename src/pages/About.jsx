import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/about.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <Helmet title={t("aboutpage.about")}>
      <CommonSection title={t("aboutpage.about")} />
      <div className="about__container">
        <section className="about">
          <p className="about-p">
            {t("aboutpage.about1")} <br /> {t("aboutpage.about2")}
            <br />
            <br /> {t("aboutpage.about3")}
            <br />
            <br /> {t("aboutpage.about4")}
            <br />
            <br /> {t("aboutpage.about5")}
            <br />
            <br /> {t("aboutpage.about6")}
            <br />
            <br />
            {t("aboutpage.about7")}
          </p>
        </section>
      </div>
    </Helmet>
  );
};

export default About;
