import React from "react"; 
import CommonSection from "../Shared/CommonSection";
import { Container, Row, Col } from 'react-bootstrap';

const Tour = () => {
  return (
     <>
     <CommonSection title={"All Tours"}/>
     <section>
      <Container>
        <Row>
          <searchBar/>
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
        hi
        </Row>
      </Container>
     </section>
     </>
  );
};

export default Tour;
