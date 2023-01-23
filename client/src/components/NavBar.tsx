import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from './../index';


const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration:'none'}} to={SHOP_ROUTE}>Купи Девайс</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto">
                <Button >Админ панель</Button>
                <Button style={{marginLeft: 10}}>Войти</Button>
            </Nav>
          :
            <Nav className="ml-auto">
                <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                
            </Nav>}
        </Container>
      </Navbar>
    );
};

export default observer(NavBar);