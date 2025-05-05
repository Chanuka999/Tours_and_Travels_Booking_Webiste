import React from "react";
import { Container, Row,Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-down'



const nav_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const Header = () => {
  <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          
          {/* ============ logo =========== */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* ============ logo end ========= */}

        </div>
      </Row>
    </Container>
  </header>
};

export default Header;
