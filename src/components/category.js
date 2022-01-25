import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import antenna from '../images/Antenna.png';
import flight from '../images/Vector-Flying-Plane-PNG-Cutout.png'
import mic from '../images/Microphone-PNG-Image.png'
import set from '../images/settings.png'

const Category = () => {
  return (
    <Container style={{textAlign:'center', paddingTop: '10vh'}}>
      <Row >
        <h6>Category</h6>
      </Row>
      <Row>
        <h1>We Offer Best Services</h1>
      </Row>

      <Row xs={1} md={2} lg={4}  className="my-4">
        <Card style={{height: '40vh'}} border="none" >
          <Card.Img variant='top' src={`${antenna}`} height = '50%' />
          <Card.Body>
            <Card.Title>Calculated weather</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height: '40vh'}} border="none" >
          <Card.Img variant='top' src={`${flight}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Best flights</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height: '40vh'}} border="none" >
          <Card.Img variant='top' src={`${mic}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Local events</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height: '40vh'}} border="none" >
          <Card.Img variant='top' src={`${set}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Customization</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Category;