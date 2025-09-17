import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import pmsLogo from '../assets/pmsit_logo.png'; // Adjust extension if needed
import { SCHOOL } from '../constants';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center header-brand"
        >
          <img
            src={pmsLogo}
            alt="PMS Logo"
            className="header-logo"
            style={{ marginRight: 10, borderRadius: 50 }}
          />
          <div className="d-flex flex-column">
            {SCHOOL.FULL_NAME}
            <span style={{ fontSize: '0.8rem', lineHeight: 1 }}>{SCHOOL.SHORT_ADDRESS}</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-lg-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#principal">Principal Message</Nav.Link>
            <Nav.Link href="#past-events">Past Events</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#news-and-notices">News & Notices</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}