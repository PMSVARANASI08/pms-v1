import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSchool } from 'react-icons/fa';
import { SCHOOL } from '../../constants';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light mt-10">
      <Container>
        <Row className="align-items-start">
          <Col md={12} className="mb-4">
            <h3 className="d-flex align-items-center gap-2">
              <FaSchool className="text-primary" /> Contact Us
            </h3>
          </Col>

          <Col md={6} className="mb-4">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="mb-3">
                Have questions or want to know more about <strong>{SCHOOL.FULL_NAME}</strong>? Reach out to us and our team will get back to you soon.
              </p>
              
              <div className="mb-4">
                <p className="mb-1 d-flex align-items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" /> <strong>Address:</strong> {SCHOOL.ADDRESS}
                </p>
                <p className="mb-1 d-flex align-items-center gap-2">
                  <FaPhoneAlt className="text-primary" /> <strong>Phone:</strong> <a href={`tel:${SCHOOL.PHONE}`}>{SCHOOL.PHONE}</a>
                </p>
                <p className="mb-1 d-flex align-items-center gap-2">
                  <FaEnvelope className="text-primary" /> <strong>Email:</strong> <a href={`mailto:${SCHOOL.EMAIL}`}>{SCHOOL.EMAIL}</a>
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </Col>

          <Col md={6}>
            <h5 className="mb-3 d-flex align-items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> Our Location
            </h5>
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
