import React , {useState} from "react";

import CommonSection from "./../Shared/CommonSection";
import { Container, Row,Col  } from "reactstrap";

import { useLocation } from "react-router-dom";
import TourCard from './../Shared/TourCard';

import Newsletter from './../Shared/Newsletter';

const SearchResultList = () => {
  const location = useLocation();

  // Fix: Ensure data is always an array to avoid errors if location.state is undefined or not an array
  const [data] = useState(Array.isArray(location.state) ? location.state : []);

 

  return (
      <>
      <CommonSection title = {'Tour Search Result'} />
      <section>
        <Container>
          <Row>
               {!data || data.length == 0 ? (
                <h4 className="text-center">No tour found</h4>
               ) : (
                data?.map(tour => (
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))
               )}   
             </Row>
          </Container> 
      </section>
      <Newsletter/>
      </>
  );
};

export default SearchResultList;
