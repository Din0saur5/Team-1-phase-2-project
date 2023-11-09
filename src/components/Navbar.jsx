import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GiAbstract097} from "react-icons/gi";

function NavbarComponent({currentPage}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={()=>{window.scrollTo( {top: document.body.scrollHeight, behavior: 'instant' } ) } } ><GiAbstract097 size={40}/>&nbsp;&nbsp;DreamScape</Navbar.Brand>
        <Nav variant="underline" defaultActiveKey={currentPage} className="ms-auto">
          <Nav.Link eventKey="/" as={Link} to="/" onClick={()=>{window.scrollTo( {top: document.body.scrollHeight, behavior: 'instant' } ) } }  >Home</Nav.Link>
          <Nav.Link eventKey="/about"  as={Link} to="/about">About</Nav.Link>
          <Nav.Link eventKey="/sign-up" as={Link} to="/sign-up">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}


export default NavbarComponent;
