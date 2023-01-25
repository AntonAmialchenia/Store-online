import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const star = require('../assets/star.png') 

const DeviseItem = ({device}:any) => {
    return (
        <Col md={3}>
            <Card style={{width:150, cursor:'pointer', padding:5}} border={'light'}>
                <Image width={150} height={150} src={device.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-1' >
                    <div>Samsung ...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={16} height={16} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviseItem;