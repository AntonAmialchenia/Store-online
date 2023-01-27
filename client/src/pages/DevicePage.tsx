import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
const BigStar = require('../assets/BigStar.png')

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      }
    const description = [
        {id:1, title: 'Оперативная память', description: '5 гб'},
        {id:2, title: 'Камера', description: '12 мп'},
        {id:3, title: 'Процессор', description: 'Snapdrgon 800'},
        {id:4, title: 'Количество ядер', description: '2'},
        {id:5, title: 'Аккумулятор', description: '4000 мА'},
    ]
      
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={4} >
                    <Image width={300} height={450} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center '>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${BigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 54}}
                        >{device.rating}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300, height: 450, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info, i) => 
                    <Row key={info.id} style={{background: i % 2 === 0 ? 'lightgray' : 'transparent', fontSize: 20, padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;