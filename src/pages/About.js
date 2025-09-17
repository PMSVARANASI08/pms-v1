import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImg1 from '../assets/about1.jpeg';
import aboutImg2 from '../assets/about2.jpeg';

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2>About Our School</h2>
              <p>
                Police Modern School was inaugurated on 17th March 2008 (Monday) by the esteemed Shri P. P. S. Sidhu, IPS, Additional Director General of Police, PAC, Uttar Pradesh. Established with the vision of providing quality education, the school serves as a foundation for the children of police personnel and the community at large.
              </p>

              <p>
                The school reflects the dedication and support of the Uttar Pradesh Police Department in ensuring not only the security of society but also the educational growth of the younger generation. The inauguration was graced under the leadership and efforts of officers including Shri Ashok Kumar Singh (Senior Assistant Commandant), Shri Satyendra Kumar Singh (Commandant), Shri Amarendra Prasad Singh (Deputy Commandant), and Shri K. Satyanarayan (Commandant, 34th Battalion PAC, Varanasi).
              </p>
              <p>
                Since its inception, Police Modern School has been committed to fostering discipline, knowledge, and holistic development among its students, carrying forward the values of service and excellence.
              </p>
            </motion.div>
          </Col>
          <Col md={6} className="mt-4 mt-md-0 d-flex justify-content-center">
            <div style={{ maxWidth: '450px', width: '100%' }}>
              <motion.img 
                src={aboutImg1} 
                alt="about" 
                className="img-fluid rounded shadow-sm mb-4" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }} 
              />
              <motion.img 
                src={aboutImg2} 
                alt="about" 
                className="img-fluid rounded shadow-sm" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}