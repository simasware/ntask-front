import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppHeader = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
      NTask App
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Tarefas</Nav.Link>
      <Nav.Link href="http://www.simasware.com.br" target="_blank">Sobre</Nav.Link>
    </Nav>
  </Navbar>
);

export default AppHeader;
