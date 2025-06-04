import React, { useState, useEffect } from "react";

import CommonSection from "./../Shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import TourCard from "./../Shared/TourCard";

import Newsletter from "./../Shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (Array.isArray(location.state) && location.state.length > 0) {
      setData(location.state);
    } else {
      fetch("/api/v1/tours")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch tours");
          return res.json();
        })
        .then((result) => {
          setData(result.data || []);
        })
        .catch(() => setData([]));
    }
  }, [location.state]);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
