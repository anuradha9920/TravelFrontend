import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { PlayCircleFill } from 'react-bootstrap-icons';
const About = ()=>{
    return (<Container
        style={{
            paddingTop: "10vh",
            paddingBottom: "10vh"
        }}>
        <Row>
            <Col xs={12} md={8} lg={4}>
                <Row>
                    <h5>Best Destinations Around The World</h5>
                </Row>
                <Row>
                    <h1>Travel, enjoy and live a new and full life</h1>
                </Row>
                <Row>
                    <p style={{
                        textAlign: 'justify'
                    }}>
                        Built Wicket longer admire do barton vanity itself do in it. Preferd to sportsman it engrosed to listening. Park gate cell bay west hard for the.
                    </p>
                </Row>
                <Row>
                    <Col xs={6} size="lg">
                        <Button variant="warning" >Find out more</Button>
                        
                    </Col>
                    <Col xs={6} >
                        <Button variant="Light" size="lg">
                            <PlayCircleFill style={{color: 'red'}}/> Play Demo
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>);
}
export default About;