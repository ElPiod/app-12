import React from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Facebook, GeoAltFill, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='login'>
      <Container>
        <Row>
          <Col md={12} xs={12} className='d-flex justify-content-center flex-column my-1'>
            <div className="logo-evon mx-auto">
              <GeoAltFill size={30} color='white' className='icon-evon1' />
              <GeoAltFill size={30} color='white' className='icon-evon2' />
            </div>
            <h3 className='text-center my-2'>EVON</h3><br />
          </Col>
          <Col md={12} xs={12} className='text-center'>
            <Form>
              <FormGroup>
                  <div className="myInput mb-2">
                      <input type="text" name='email' className='form-control' placeholder='Email'/>
                    </div>
                    <div className="myInput mb-3">
                        <input type="password" name='password' className='form-control' placeholder='Password'/>
                    </div>
                <Button className='m-2 btn-sign' variant='primary' type='submit'>
                  Log In
                </Button>
              </FormGroup>
            </Form>
            <a href="/">Forgot password?</a>
            <div className="hr d-flex justify-content-center my-3">
              <hr className='my-hr' /> <span className='pe-2 ps-2'>or</span> <hr className='my-hr' />
            </div>
          </Col>
          <Col md={12} xs={12} className='text-center d-md-flex gap-2'>
            <div className="facebook bg-primary">
              <Link to="https://www.facebook.com/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className='text-dark'>
                <Facebook size={30} color='darkblue' />
                <span className='mx-3'>Sign Up with Facebook</span>
              </Link>
            </div>
            <div className="google">
              <Link to="https://accounts.google.com/signup/v2/createaccount?theme=glif&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" rel="noopener noreferrer" className='text-dark'>
                <Google size={30} color='yellow' />
                <span className="mx-4">Sign Up with Google</span>
              </Link>
            </div>
          </Col>
          <div className="link-skip my-3 text-center">
            <p className="my-5">Don't have an account? <Link to="/sign">Sign Up</Link></p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
