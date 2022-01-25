import React from 'react';
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { SendFill, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <Container>
      <SendFill size={50}
        style={{ position: 'relative', zIndex: 1, left: '98%', top:'0%' }}
      />
      <Card style={{ backgroundColor: '#d0a0de' }} align='center'>
      
        <Card.Body style={{ padding: '5%' }}>
          <Card.Title>
            Subscribe to get information, latest news, and other interesting
            offers about Cobham
          </Card.Title>

          <Form>
            <Row className='justify-content-md-center'>
              <Col lg={7}>
                <InputGroup>
                  <InputGroup.Text>
                    <Envelope />
                  </InputGroup.Text>
                  <FormControl
                    id='inlineFormInputGroup'
                    placeholder='Your mail'
                  />
                </InputGroup>
              </Col>
              <Col lg={2}>
                <Button style={{ backgroundColor: '#ed8d5c' }}>
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      
    </Container>
  );
};

export default Footer;