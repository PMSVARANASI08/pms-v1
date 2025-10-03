import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSchool, FaUsers, FaBookOpen } from 'react-icons/fa';
import aboutImg1 from '../../assets/about1.jpeg';
import aboutImg2 from '../../assets/about2.jpeg';

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-3 d-flex align-items-center gap-2">
                <FaSchool className="text-primary" /> About Our School
              </h2>

              <p className="d-flex align-items-center gap-2">
                <FaUsers className="text-primary" /> Police Modern School was inaugurated on 17th March 2008 (Monday) by Shri P. P. S. Sidhu, IPS, Additional Director General of Police, PAC, Uttar Pradesh. Established with the vision of providing quality education, the school serves as a foundation for the children of police personnel and the community at large.
              </p>

              <p className="d-flex align-items-center gap-2">
                <FaBookOpen className="text-primary" /> The school reflects the dedication and support of the Uttar Pradesh Police Department in ensuring both security and the educational growth of the younger generation. The inauguration was graced under the leadership of officers including Shri Ashok Kumar Singh, Shri Satyendra Kumar Singh, Shri Amarendra Prasad Singh, and Shri K. Satyanarayan.
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
