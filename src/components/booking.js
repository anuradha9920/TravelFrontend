import React from 'react';
import { Row, Col, Container, Card, ProgressBar } from 'react-bootstrap';
import {
    Command,
    CashStack,
    ConeStriped,
    TreeFill,
    Heart,
    SendFill,
    Map,
} from 'react-bootstrap-icons';
import cardImg from '../images/travelImage.jpg';
import europe from '../images/europe.jpeg';

const Bookings = () => {
    return (
        <Container style={{ paddingTop: '5%' }}>
            <Row>
                <h6>Easy and Fast</h6>
            </Row>
            <Row xs={1} md={1} xl={2}>
                <Col xs={12} md={6}>
                    <h1>Book Your Next Trip</h1>
                    <h1>In 3 Easy Steps</h1>
                    <Row>
                        <div
                            className='card mb-3'
                            style={{ width: '100%', borderColor: 'transparent' }}
                        >
                            <div className='row no-gutters'>
                                <div
                                    className='col-md-2'
                                    style={{ paddingLeft: '3%', paddingTop: '2%' }}
                                >
                                    <Command
                                        color='white'
                                        size={80}
                                        style={{
                                            backgroundColor: '#eba134',
                                            borderRadius: '20%',
                                            padding: '1%',
                                        }}
                                    />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Choose Destination</h5>
                                        <p className='card-text'>
                                            <small className='text-muted'>
                                                lorem ipsum dolor sit
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div
                            className='card mb-3'
                            style={{ width: '100%', borderColor: 'transparent' }}
                        >
                            <div className='row no-gutters'>
                                <div
                                    className='col-md-2'
                                    style={{ paddingLeft: '3%', paddingTop: '2%' }}
                                >
                                    <CashStack
                                        color='white'
                                        size={80}
                                        style={{
                                            backgroundColor: '#d67247',
                                            borderRadius: '20%',
                                            padding: '1%',
                                        }}
                                    />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Make Payment</h5>
                                        <p className='card-text'>
                                            <small className='text-muted'>
                                                lorem ipsum dolor sit
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div
                            className='card mb-3'
                            style={{ width: '100%', borderColor: 'transparent' }}
                        >
                            <div className='row no-gutters'>
                                <div
                                    className='col-md-2'
                                    style={{ paddingLeft: '3%', paddingTop: '2%' }}
                                >
                                    <ConeStriped
                                        color='white'
                                        size={80}
                                        style={{
                                            backgroundColor: '#4869a3',
                                            borderRadius: '20%',
                                            padding: '1%',
                                        }}
                                    />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            Reach Airport on Selected Date
                                        </h5>
                                        <p className='card-text'>
                                            <small className='text-muted'>
                                                lorem ipsum dolor sit{' '}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Card
                        style={{
                            width: '65%',
                            boxShadow: '5px 5px 10px #55b8c9',
                            borderRadius: '5%',
                        }}
                    >
                        <Card.Img
                            variant='top'
                            src={`${cardImg}`}
                            style={{ borderRadius: '5%' }}
                        />
                        <Card.Body>
                            <Card.Title>Trip to Greece</Card.Title>
                            <Card.Text>
                                <div>14-29 June, By Robbin Jo</div>
                                <div>
                                    <TreeFill
                                        size={33}
                                        style={{
                                            borderRadius: '50%',
                                            backgroundColor: '#d1cac7',
                                            marginRight: '2%',
                                        }}
                                    />
                                    <Map
                                        size={33}
                                        style={{
                                            borderRadius: '50%',
                                            backgroundColor: '#d1cac7',
                                            marginRight: '2%',
                                        }}
                                    />
                                    <SendFill
                                        size={33}
                                        style={{ borderRadius: '50%', backgroundColor: '#d1cac7' }}
                                    />
                                </div>
                            </Card.Text>
                            <Card.Footer>
                                <div
                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    24 people going
                                    <Heart style={{ borderRadius: '30%' }} />
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                    <div
                        className='card mb-3'
                        style={{
                            borderColor: 'transparent',
                            boxShadow: '5px 5px 10px gray',
                            height: '15vh',
                            width: '60%',
                            position: 'relative',
                            zIndex: 1,
                            right: '-35%',
                            bottom: '30%',
                            borderRadius: '8%',
                        }}
                    >
                        <div className='row no-gutters'>
                            <div
                                className='col-md-4'
                                style={{ paddingLeft: '3%', paddingTop: '2%' }}
                            >
                            <img
                                src={`${europe}`}
                                height='20%'
                                style={{ borderRadius: '50%' }}
                            />
                            </div>
                            <div className='col-md-6'>
                                <div className='card-body'>
                                    <small className='text-muted'> Ongoing </small>
                                    <h6>Trip to Rome</h6>
                                    <p className='card-text'>
                                        40% completed
                                        <ProgressBar now={40} variant='success' size='sm' />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Bookings;