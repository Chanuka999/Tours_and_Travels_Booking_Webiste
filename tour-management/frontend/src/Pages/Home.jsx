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
import ServiceList from "../services/ServiceList";
import experienceImg from "../assest/images/experience.png";
import MasonryImageGallery from "../Component/image-gallery/MasonryImageGallery";
import Testimonial from "../Component/Testimonial/Testimonial";

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
              <div className="hero__img-box hero__video-box mt-4">
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
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit
                  <br /> corrupti iure explicabo quod dolores obcaecati facere
                  voluptatum, totam iusto minus molestiae recusandae aperiam
                  eius error delectus placeat ipsa neque praesentium!
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15k</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Fans Love"} />
              <h2 className="testimoial__title">what out fans say about</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
