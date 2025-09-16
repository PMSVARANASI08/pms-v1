import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SCHOOL_LOCATION_COORDINATES, SCHOOL_NAME_FULL } from '../constants';

export default function ContactUs() {
  return (
    <section id="contact" className="py-5 bg-light mt-10">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3>Contact Us</h3>
              <p>
                Have questions or want to know more about {SCHOOL_NAME_FULL}? Reach out to us and our team will get back to you soon.
              </p>
              <Form className="w-100">
                <Form.Group className="mb-2" controlId="name">
                  <Form.Control placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Control placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="message">
                  <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                </Form.Group>
                <Button variant="primary">Send Message</Button>
              </Form>
            </motion.div>
          </Col>
          <Col md={6}>
            <h5>Our Location</h5>
                <iframe
                  title="School Location"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: 8 }}
                  src={`https://www.google.com/maps?q=${SCHOOL_LOCATION_COORDINATES}&hl=es;z=16&output=embed`}
                  allowFullScreen
                ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}