import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from './../index';
import { ADMIN_ROUTE } from './../utils/consts';

const NavBar = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavLink
          style={{ color: 'white', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          Купи Девайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              onClick={() => navigate(ADMIN_ROUTE)}
            >Админ панель</Button>
            <Button 
              style={{ marginLeft: 10 }}
              onClick={() => navigate(LOGIN_ROUTE)}
            >Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default observer(NavBar);
