import React from "react";
import TourCard from "../../Shared/TourCard";
import tourData from "../../assest/data/tours";
import { Col } from "reactstrap";

const FeaturedTourList = () => {
  return (
    <div>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </div>
  );
};

export default FeaturedTourList;
