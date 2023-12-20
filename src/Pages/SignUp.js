import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, GeoAltFill, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';
import { useRef, useState } from 'react';

const SignUp = () => {

  const messageRef = useRef()
  const messagesCollection = collection(firestore, "messages")

  const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      await addDoc(messagesCollection, data);
      alert('Document successfully written!');

      // vider les inputs
      setValues({
        name: "",
        email: "",
        password: "",
      });
      
    } catch (error) {
      console.error('Error writing document: ', error);
      alert('Error writing document. Check the console for details.');
    }
  }
  
  
  return (
    <div className='signUp'>
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
             <form onSubmit={handleSubmit} ref={messageRef} className='d-flex flex-column align-items-center'>
                    <div className="myInput mb-2">
                        <input type="text" name='name' className='form-control' placeholder='Full Name'
                        onChange={e => setValues({...values, name: e.target.value})}
                        />
                    </div>
                    <div className="myInput mb-2">
                        <input type="text" name='email' className='form-control' placeholder='Email'
                        onChange={e => setValues({...values, email: e.target.value})}
                        />
                    </div>
                    <div className="myInput mb-3">
                        <input type="password" name='password' className='form-control' placeholder='Password'
                        onChange={e => setValues({...values, password: e.target.value})}
                        />
                    </div>
                    <div className="myInput">
                      <button className='btn btn-primary text-white w-100'>Sign Up</button>
                    </div>
                </form>
            <div className="hr d-flex justify-content-center">
              <hr className='my-hr' /> <span className='pe-2 ps-2'>or</span> <hr className='my-hr' />
            </div>
          </Col>
          <Col md={12} xs={12} className='text-center d-md-flex gap-2'>
            <div className="facebook bg-primary">
              <a href="https://www.facebook.com/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className='text-dark'>
                <Facebook size={30} color='darkblue' />
                <span className='mx-3'>Sign Up with Facebook</span>
              </a>
            </div>
            <div className="google">
              <a href="https://accounts.google.com/signup/v2/createaccount?theme=glif&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" rel="noopener noreferrer" className='text-dark'>
                <Google size={30} color='yellow' />
                <span className="mx-4"> Sign Up with Google</span>
              </a>
            </div>
          </Col>
          <div className="link-skip my-4 text-center">
            <p>By signing up you accept the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></p>
            <p className="my-5">Already have an account? <Link to="/login">Log In</Link></p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
