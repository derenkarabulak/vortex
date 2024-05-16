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
import { MdChevronLeft } from "react-icons/md";

const Home = () => {
  const [products, setProducts] = useState(product);

  const [Mont, setMont] = useState([]);
  const [isCeketi, setIsCeketi] = useState([]);
  const [kaban, setKaban] = useState([]);
  const [sweatshirt, setSweatshirt] = useState([]);
  const [pantolon, setPantolon] = useState([]);
  const [polar, setPolar] = useState([]);
  const navigate = useNavigate();

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredMont = products.filter((item) => item.category === "Mont");

    const filteredIsCeketi = products.filter(
      (item) => item.category === "İş Ceketi"
    );

    const filteredKaban = products.filter((item) => item.category === "Kaban");

    const filteredSweatshirt = products.filter(
      (item) => item.category === "Sweatshirt"
    );

    const filteredPantolon = products.filter(
      (item) => item.category === "Pantolon"
    );

    const filteredPolar = products.filter((item) => item.category === "Polar");

    setMont(filteredMont);
    setIsCeketi(filteredIsCeketi);
    setKaban(filteredKaban);
    setSweatshirt(filteredSweatshirt);
    setPantolon(filteredPantolon);
    setPolar(filteredPolar);
  }, [products]);

  console.log(Mont);

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
                <p className="hero__subtitle">{year} Yılının En İyisi</p>
                <h2>Yüksek Kalite İş Kıyafetleri</h2>
                <p>
                  İş dünyasında profesyonel görünmek ve güvenilir bir imaj
                  çizmek her zaman önemlidir. İşte tam da bu noktada, size en
                  uygun iş elbisesini bulmanıza yardımcı olmak için buradayız.
                  Vortex, iş dünyasının taleplerine uygun, kaliteli ve şık iş
                  elbiseleriyle dolu bir dünyanın kapılarını size açıyor.
                </p>
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
                    ÜRÜNLER
                  </Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="text-white font-bold md:text-xl p-4">
        <Container className="relative flex items-center group">
          <Row className="overflow-clip">
            <Col lg="12" className="text-center">
              <h2 className="section__title">Mont</h2>
            </Col>
            <ProductsList
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              data={Mont}
            />
          </Row>
        </Container>
      </section>

      <section className="is__ceketi">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">İş Ceketi</h2>
            </Col>
            <ProductsList data={isCeketi} />
          </Row>
        </Container>
      </section>

      <section className="kaban">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Kaban</h2>
            </Col>
            <ProductsList data={kaban} />
          </Row>
        </Container>
      </section>

      <section className="sweatshirt">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Sweatshirt</h2>
            </Col>
            <ProductsList data={sweatshirt} />
          </Row>
        </Container>
      </section>

      <section className="pantolon">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Pantolon</h2>
            </Col>
            <ProductsList data={pantolon} />
          </Row>
        </Container>
      </section>

      <section className="polar">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Polar</h2>
            </Col>
            <ProductsList data={polar} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Sınırlı Süreli Teklif</h4>
                <h3 className="text-white fs-5 mb-3">
                  Kaliteli İş Kıyafetleri
                </h3>
              </div>
              <Clock />
              <motion.button
                onClick={() => navigate("/products")}
                whileTap={{ scale: 1.2 }}
                className="shop__btn store__btn"
              >
                <Link to="/products">Ürünleri Gör</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
