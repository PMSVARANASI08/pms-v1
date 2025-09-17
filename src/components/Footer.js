import { Container, Row, Col } from 'react-bootstrap';
import {SCHOOL} from '../constants';
import { toTitleCase } from '../utils/strings';

export default function Footer(){
  return (
    <footer className="footer py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>{SCHOOL.SHORT_NAME}</h5>
            <p>Small classes · Big hearts · Bright futures</p>
          </Col>
          <Col md={6} className="text-md-end text-center mt-3 mt-md-0">
            <p>© {new Date().getFullYear()} {toTitleCase(SCHOOL.FULL_NAME)}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
