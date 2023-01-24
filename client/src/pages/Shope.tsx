import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import TypeBar from '../components/TypeBar';

const Shope = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Shope;