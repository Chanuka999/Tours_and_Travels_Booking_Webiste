import React from "react";
import '../styles/tour-details.css'
import { Container, Row,Col, Form,ListGroup } from 'reactstrap'
import { useParams } from "react-router-dom";
import tourData from '../assest/data/tours'
import Newsletteer from "../Shared/Newsletter";

const TourDetails = () => {

  const {id} = useParams();

  const tour = tourData.find(tour => tour.id === id)

  const {photo, title, desc, price, reviews, city, distance, maxGroupSize} = tour

  return <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
            </div>
            <div className="tour__info">
              <h2>{title}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletteer/>
  </>
};

export default TourDetails;
