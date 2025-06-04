import React, { useState, useEffect } from "react";
import CommonSection from "../Shared/CommonSection";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/tour.css";
import tourData from "../assest/data/tours";
import TourCard from "./../Shared/TourCard";
import Searchbar from "./../Shared/Searchbar";
import Newsletter from "./../Shared/Newsletter";
//import { useEffect } from "react";

const Tour = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <Searchbar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div
                className="pagination d-flex align-items-center
          justify-content-center mt-4 gap-3"
              >
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tour;
