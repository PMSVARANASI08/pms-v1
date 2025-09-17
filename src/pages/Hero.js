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
            // Darker overlay for better contrast
            background: `linear-gradient(90deg, rgba(18, 49, 128, 0.92) 60%, rgba(3,169,244,0.5)), url(${heroImages[imgIdx]}) center/cover no-repeat`
          }}
        />
      </AnimatePresence>
      <Container className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="display-4 fw-bold mb-3"
            style={{
              lineHeight: 1.15,
              color: "#fff",
              textShadow: "0 2px 16px rgba(0,0,0,0.45), 0 1px 1px rgba(0,0,0,0.25)"
            }}
          >
            Nurturing Curiosity,<br className="d-none d-md-block" />
            <span className="text-primary" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
              Inspiring Excellence
            </span>
          </h1>
          <p
            className="lead mb-4"
            style={{
              maxWidth: 600,
              color: "#f3f3f3",
              textShadow: "0 1px 8px rgba(0,0,0,0.35)"
            }}
          >
            Where every child discovers their potential through care, creativity, and confidence.<br className="d-none d-md-block" />
            <span className="text-light small d-block mt-2" style={{ color: "#e0e0e0" }}>
              “तमसो मा ज्योतिर्गमय — From darkness to light, from ignorance to knowledge.”
            </span>
          </p>
          <div className="mt-4 d-flex flex-column flex-sm-row gap-2">
            <Button href="#news-and-notices" className="me-sm-2" variant="primary" size="lg">
              View News & Notices
            </Button>
            <Button href="#contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}