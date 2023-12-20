import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GeoAltFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Container className='my-5'>
        <Row>
          <Col md={12} xs={12} className='d-flex justify-content-center flex-column my-5'>
            <div className="logo-evon mx-auto">
              <GeoAltFill size={30} color='white' className='icon-evon1'/>
              <GeoAltFill size={30} color='white' className='icon-evon2'/>
            </div>
            <h3 className='text-center my-2'>EVON</h3><br />
            <h3 className="text-secondary text-center">Discover upcoming events <br />near you</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} className='d-flex justify-content-center flex-column my-2'>
            <Link to="/sign" className='btn btn-primary d-block fw-bold'>Sign Up</Link>
          </Col>
          <Col md={6} xs={12} className='d-flex justify-content-center flex-column'>
            <Link to="/login" className='btn btn-light d-block fw-bold'>Log In</Link>
          </Col>
        </Row>
        <div className="link-skip my-5 text-center">
          <Link to="/">Skip for now</Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
