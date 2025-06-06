import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assest/images/weather.png";
import guideImg from "../assest/images/guide.png";
import customizationImg from "../assest/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "calculate weather",
    desc: "lorem ipsum dolor sit amet,consectetor adipisicing elit",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "lorem ipsum dolor sit amet,consectetor adipisicing elit",
  },
  {
    imgUrl: customizationImg,
    title: "customization",
    desc: "lorem ipsum dolor sit amet,consectetor adipisicing elit",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
