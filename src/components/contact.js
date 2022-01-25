import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, At } from 'react-bootstrap-icons';
import MobileStoreButton from 'react-mobile-store-button';


const Contact = () => {
  return (
    <Container style={{ paddingTop: '5%' }}>
      <Row>
        <Col lg={3}>
          <Row>
            <h1>Jadoo.</h1>
          </Row>
          <Row>
            <p>Book your trip in minutes, get full control for much longer.</p>
          </Row>
        </Col>
        <Col lg={2}>
          <Row as='h4'>Company</Row>
          <Row>About</Row>
          <Row>Careers</Row>
          <Row>Mobile</Row>
        </Col>
        <Col lg={2}>
          <Row as='h4'>Contact</Row>
          <Row>Help/FAQ</Row>
          <Row>Press</Row>
          <Row>Affiliates</Row>
        </Col>
        <Col lg={2}>
          <Row as='h4'>More</Row>
          <Row>Airline fees</Row>
          <Row>Airline</Row>
          <Row>Low fare tips</Row>
        </Col>
        <Col lg={3} align='center'>
          <Row>
            <Col lg={4}>
              <Facebook size={30} />
            </Col>
            <Col lg={4}>
              <Instagram size={30} />
            </Col>
            <Col lg={4}>
              <Twitter size={30} />
            </Col>
          </Row>
          <Row align='center' style={{ paddingTop: '2%' }}>
            <h5>Discover our apps</h5>
          </Row>
          <Row>
            <Col>
              <MobileStoreButton store='android' width='80%' />
              </Col>
              <Col>
              <MobileStoreButton store='ios' width='80%' />
            </Col>
          </Row>
        </Col>
      </Row>
      <footer align='center' style={{marginTop:'2%', marginBottom:'1%'}}>All rights reserved<At/>jadoo.co</footer>
    </Container>
  );
};

export default Contact;