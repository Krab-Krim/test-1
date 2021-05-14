import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap/es";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Список пользователей</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Добавить пользователя</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
