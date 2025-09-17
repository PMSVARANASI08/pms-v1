import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import principalImg from '../assets/principal.jpeg';

export default function PrincipalMessage() {
  return (
    <section id="principal" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <motion.img
              src={principalImg}
              alt="Principal"
              className="img-fluid rounded shadow-sm"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ width: "100%", maxWidth: 350 }}
            />
          </Col>
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mb-3">From the Principal’s Desk</h2>
              <p>
                At Police Modern School, we believe that education is not just about academics but about nurturing responsible, confident, and compassionate individuals. As the Principal, it is my privilege to lead a team of dedicated teachers and staff who work tirelessly to create an environment where every child can explore their potential and achieve excellence.
              </p>
              <p>
                Our mission is to provide quality education rooted in discipline, values, and modern learning practices. We aim to equip our students with the skills, knowledge, and character they need to face the challenges of the future with confidence.
              </p>
              <p>
                We take pride in being a part of the Police Modern School family, where tradition meets innovation, and where every child is inspired to dream, learn, and grow. Together, we are committed to shaping not only good students but also responsible citizens of tomorrow.
              </p>
              <p className="mt-4 mb-0">
                <strong>Warm regards,</strong><br />
                Principal<br />
                Police Modern School
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}