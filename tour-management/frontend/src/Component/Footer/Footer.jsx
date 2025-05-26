import React from "react";
import "./Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../../src/assest/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
          <div className="logo">
            <img src={logo} alt=" "/>

            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i class="ri-youtube-line"></i> </Link>
              </span>
              <span>
                <Link to='#'><i class="ri-github-fill"></i> </Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-fill"></i> </Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-fill"></i></Link>
              </span>
            </div>
          </div>
          </Col>

          <Col lg='3'>
           <h5 className="footer__link-title">Discover</h5>

           <ListGroup className="footer__quick-links">
           {quick__links.map((item, index) => (
           <ListGroupItem key={index} className="ps-0 border-0">
            <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
            ))}
           </ListGroup>
           </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>

             <ListGroup className="footer__quick-links">
             {quick__links.map((item, index) => (
             <ListGroupItem key={index} className="ps-0 border-0">
            <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
           ))}
          </ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className="footer__link-title">Contact</h5>

             <ListGroup className="footer__quick-links">
             
             <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">

              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                <i class="ri-map-pin-line"></i>
               
                </span>

              </h6>

              <p className="mb-0">Eknaligoda,kuruvita,ratnapura</p>
              </ListGroupItem>
              <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">

             <h6 className="mb-0 d-flex align-items-center gap-2">
            <span>
            <i class="ri-mail-line"></i>
           Email:
  </span>
</h6>

<p className="mb-0">madhawakavindu7@.com</p>
              </ListGroupItem>
              <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">

             <h6 className="mb-0 d-flex align-items-center gap-2">
            <span>
            <i class="ri-phone-line"></i>
           Phone:
  </span>
</h6>



<p className="mb-0">+94703281170,+94772849767</p>

</ListGroupItem>
          </ListGroup>
        </Col>
                       
                        
                 <Col lg='12' className="text-center pt-5"><p className="copyright">Copyright 2025, 
                  design and develop by
                  Ratnapura house.All rights reserved.</p>
                        </Col>       
                 </Row>
               </Container>
              </footer>
  );

};

export default Footer;
