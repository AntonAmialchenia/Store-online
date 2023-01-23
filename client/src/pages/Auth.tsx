import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './../utils/consts';


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location);
    
    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                    />
                    <div className='d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center'>
                        {isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button >
                        {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </div>
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;