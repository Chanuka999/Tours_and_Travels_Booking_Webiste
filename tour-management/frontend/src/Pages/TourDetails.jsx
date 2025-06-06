import React, { useEffect, useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";

import Newsletter from "../Shared/Newsletter";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assest/images/avatar.jpg"; // Confirm path
import Booking from "../Component/Booking/Booking.jsx";
import useFetch from "./../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  // Fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // Move all hooks above any conditional returns
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  if (!tour) {
    return (
      <Container className="text-center mt-5">
        <h2>Tour not found</h2>
      </Container>
    );
  }

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // Show review in console for now
    console.log({
      message: reviewText,
      rating: tourRating,
    });

    // Reset after submit (optional)
    reviewMsgRef.current.value = "";
    setTourRating(null);
  };

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt={title} className="img-fluid rounded" />

                  <div className="tour__info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-s-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        {avgRating === 0 ? "Not rated" : `${avgRating} `}
                        {totalRating > 0 && <span>({reviews?.length})</span>}
                      </span>

                      <span>
                        <i className="ri-map-pin-user-line"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i> {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i> ${price}{" "}
                        / per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i> {distance} km
                      </span>
                      <span>
                        <i className="ri-group-line"></i> {maxGroupSize} people
                      </span>
                    </div>

                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <span
                            key={num}
                            onClick={() => setTourRating(num)}
                            style={{
                              cursor: "pointer",
                              color: tourRating >= num ? "orange" : "#aaa",
                            }}
                          >
                            {num}
                            <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews mt-4">
                      {reviews?.map((review, index) => (
                        <div className="review__item d-flex gap-3" key={index}>
                          <img src={avatar} alt="User avatar" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.name || "Anonymous"}</h5>
                                <p>
                                  {new Date().toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill ms-1"></i>
                              </span>
                            </div>
                            <h6>{review.text || "Amazing tour"}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
