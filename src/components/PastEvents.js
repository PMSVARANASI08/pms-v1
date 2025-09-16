import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Import your event images
// import event1 from '../assets/events1.jpeg';
import event2 from '../assets/events2.jpeg';
import event3 from '../assets/events3.jpeg';
import event4 from '../assets/events4.jpeg';
import event5 from '../assets/events5.jpeg';
import event6 from '../assets/events6.jpeg';
import event7 from '../assets/events7.jpeg';
import event8 from '../assets/events8.jpeg';
import event9 from '../assets/events9.jpeg';
// import event10 from '../assets/events10.jpeg';
// import event11 from '../assets/events11.jpeg';
import event12 from '../assets/events12.jpeg';
import event13 from '../assets/events13.jpeg';

const pastEvents = [
  // {
  //   title: 'Annual Sports Day 2024',
  //   img: event1,
  //   description: 'A day of thrilling athletic competition and sportsmanship.',
  // },
  {
    title: 'Janmashtami Celebration',
    img: event2,
    description: 'Joyful festivities marking the birth of Lord Krishna with dance and drama performances.',
  },
  {
    title: 'Cultural Fest',
    img: event3,
    description: 'Celebrating diversity with music, dance, and drama performances.',
  },
  {
    title: 'Art Exhibition',
    img: event4,
    description: 'A showcase of artistic talent and creativity from our students.',
  },
  {
    title: 'Cultural Fest',
    img: event5,
    description: 'Celebrating diversity with music, dance, and drama performances.',
  },
  {
    title: 'Art Exhibition',
    img: event6,
    description: 'A showcase of artistic talent and creativity from our students.',
  },
  {
    title: 'Cultural Fest',
    img: event7,
    description: 'Celebrating diversity with music, dance, and drama performances.',
  },
  {
    title: 'Art Exhibition',
    img: event8,
    description: 'A showcase of artistic talent and creativity from our students.',
  },
  {
    title: 'Cultural Fest',
    img: event9,
    description: 'Celebrating diversity with music, dance, and drama performances.',
  },
  // {
  //   title: 'Art Exhibition',
  //   img: event10,
  //   description: 'A showcase of artistic talent and creativity from our students.',
  // },
  // {
  //   title: 'Cultural Fest',
  //   img: event11,
  //   description: 'Celebrating diversity with music, dance, and drama performances.',
  // },
  {
    title: 'Independence Day Celebration',
    img: event12,
    description: 'Honoring our nation\'s freedom with patriotic songs and dances.',
  },
  {
    title: 'Digital Smart Classrooms Launch',
    img: event13,
    description: 'Embracing technology to enhance learning experiences for our students.',
  },
];

export default function PastEvents() {
  return (
    <section id="past-events" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Glimpses of Past Events</h2>
        <Row className="justify-content-center g-4">
          {pastEvents.map((event, i) => (
            <Col md={4} className="d-flex" key={i}>
              <motion.div
                className="w-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: i * 0.1 }}
              >
                <Card className="text-center shadow-sm h-100" style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" src={event.img} alt={event.title} className="event-grid card" />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}