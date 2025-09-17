import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SCHOOL } from '../constants';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light mt-10">
      <Container>
        <Row className="align-items-center">
          <h3 className="text-left mb-4">Contact Us</h3>
          <Col md={12} className="mt-4">
             <div className="mb-3">
              <p className="mb-1"><strong>{SCHOOL.FULL_NAME}</strong></p>
              <p className="mb-1">{SCHOOL.ADDRESS}</p>
              <p className="mb-1"><strong>Phone:</strong> <a href="tel:{SCHOOL.PHONE}">{SCHOOL.PHONE}</a></p>
              <p className="mb-1"><strong>Email:</strong> <a href="mailto:{SCHOOL.EMAIL}">{SCHOOL.EMAIL}</a></p>
            </div>
          </Col>

          <Col md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="mb-4">
                Have questions or want to know more about {SCHOOL.FULL_NAME}? Reach out to us and our team will get back to you soon.
              </p>
              <ContactForm />
            </motion.div>
          </Col>
          <Col md={6} className="mt-4">
            <h5>Our Location</h5>
                <iframe
                  title="School Location"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: 8 }}
                  src={`https://www.google.com/maps?q=${SCHOOL.LOCATION_COORDINATES}&hl=es;z=16&output=embed`}
                  allowFullScreen
                ></iframe>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}