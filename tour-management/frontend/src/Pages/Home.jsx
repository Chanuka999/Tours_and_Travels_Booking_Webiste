import React from "react";

import FeaturedTourList from "../Component/Featured-tours/FeaturedTourList";

import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assest/images/hero-img01.jpg";
import heroImg02 from "../assest/images/hero-img02.jpg";
import heroVideo from "../assest/images/hero-video.mp4";
import Subtitle from "../Shared/Subtitle";
import worldImg from "../assest/images/world.png";
import Searchbar from "../Shared/Searchbar";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                  delectus iure dolores, dignissimos unde omnis quae eligendi
                  veniam dolorem neque nobis sit enim repellat! Repellendus
                  tempora rem vitae aperiam facilis.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" controls />
              </div>
            </Col>
            <Searchbar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h1 className="services__title">We offer our best services</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
