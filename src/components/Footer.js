import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SCHOOL_NAME_FULL, SCHOOL_NAME_SHORT } from '../constants';
export default function Footer(){
  return (
    <footer className="footer py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>{SCHOOL_NAME_SHORT}</h5>
            <p>Small classes · Big hearts · Bright futures</p>
          </Col>
          <Col md={6} className="text-md-end text-center mt-3 mt-md-0">
            <p>© {new Date().getFullYear()} Police Modern School. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
