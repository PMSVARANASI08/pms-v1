import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';

const heroImages = [hero1, hero2, hero3];
const IMAGE_CHANGE_INTERVAL = 5 * 1000; // 10 seconds

export default function Hero() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % heroImages.length);
    }, IMAGE_CHANGE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={imgIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: `linear-gradient(90deg, rgba(6,80,160,0.85), rgba(3,169,244,0.6)), url(${heroImages[imgIdx]}) center/cover no-repeat`
          }}
        />
      </AnimatePresence>
      <Container className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="display-5">Education for the Next Generation</h1>
          <p className="lead">Inspiring children to learn, explore and grow — small classes, big hearts.</p>
          <div className="mt-4">
            <Button href="#about" className="me-2" variant="primary">Learn More</Button>
            <Button href="#contact" variant="outline-light">Contact Us</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}