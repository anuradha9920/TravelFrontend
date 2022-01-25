import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import Rome from './../images/Rome.jpeg';
import London from './../images/London.jpeg';
import Helsinki from './../images/Helsinki.jpeg';
import { SendFill } from 'react-bootstrap-icons';

const Destination = () => {
  return (<Container >
    <Row style={{textAlign:'center', paddingTop: '10vh'}}>
        <h6>Top Selling</h6>
    </Row>
    <Row style={{textAlign:'center'}}>
        <h1>Top Destination</h1>
    </Row>

    <Row xs={1} md={2} lg={3}  className="my-4">
        <Card style={{height: '50vh'}} border="none" >
            <Card.Img variant='top' src={`${Rome}`} height = '70%' />
            <Card.Body>
                <Card.Text>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>Rome, Italy</p>
                        <p>$5.42k</p>      
                    </div>      
                    
                    <div>
                        <p><SendFill/> 10 days trip</p>
                    </div> 
            </Card.Text>
            </Card.Body>
        </Card>
         <Card style={{height: '50vh'}} border="none" >
            <Card.Img variant='top' src={`${London}`} height = '70%' />
            <Card.Body>
                <Card.Text className="">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>London, UK</p>
                        <p>$4.2k</p>      
                    </div> 
                    <div>
                        <p><SendFill/> 12 days trip</p>
                    </div>  
                    
            </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{height: '50vh'}} border="none" >
            <Card.Img variant='top' src={`${Helsinki}`} height = '70%' />
            <Card.Body>
                <Card.Text>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>Full Europe</p>
                        <p>$15k</p>      
                    </div>      
                    
                    <div>
                        <p><SendFill/> 28 days trip</p>
                    </div> 
            </Card.Text>
            </Card.Body>
        </Card>  
    </Row>
    </Container>
  );
};

export default Destination;