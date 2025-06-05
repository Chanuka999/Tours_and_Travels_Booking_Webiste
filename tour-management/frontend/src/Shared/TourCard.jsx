import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./Tour-card.css";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="card">
      <Card>
        <div className="tour__img">
          <img
            src={
              photo
                ? (typeof photo === "string"
                    ? (photo.startsWith("/")
                        ? process.env.PUBLIC_URL + photo
                        : photo)
                    : (typeof photo === "object" && photo.default ? photo.default : photo)
                  )
                : require("../assest/images/tour.jpg")
            }
            alt="tour-img"
          />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div
            className="card__top d-flex align-items-center
      justify-content-between"
          >
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div
            className="card__bottom d-flex align-items-center 
      justify-content-between mt-3"
          >
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
