import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';
import { DEVISE_ROUTE } from '../utils/consts';
import { Devices } from '../store/DeviseStore';
const star = require('../assets/star.png') 


type DeviceItemProps = {
    device: Devices
}

const DeviseItem = ({device}: DeviceItemProps) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='d-flex justify-content-center' onClick={() => navigate(DEVISE_ROUTE + '/' + device.id)}>
            <Card style={{width:150, cursor:'pointer', padding:5}} border={'light'}>
                <Image width={'100%'}  src={device.img}/>
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