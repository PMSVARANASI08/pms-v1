import { useEffect, useState, useRef, useCallback } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { Container, Spinner, ButtonGroup, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaImages,
  FaSortAmountDown,
  FaSortAmountUp,
  FaThLarge,
  FaTh,
  FaGripHorizontal,
  FaSyncAlt,
  FaSquare
} from "react-icons/fa";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const [columns, setColumns] = useState(4);
  const [refreshKey, setRefreshKey] = useState(0);

  const [visibleCount, setVisibleCount] = useState(0);
  const rowsOfImagesPerLoad = 2; // load 2 rows at a time (lighter for mobile)
  const observerRef = useRef();

  const imagesPerLoad = columns * rowsOfImagesPerLoad;

  // Detect small screen & set default columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setColumns(1); // Force 1 column on mobile
      }
    };
    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch images (one-time fetch)
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const q = query(collection(db, "gallery"), orderBy("createdAt", sortOrder));
      const snapshot = await getDocs(q);
      const imgData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imgData);
      setVisibleCount(Math.min(imagesPerLoad, imgData.length));
      setLoading(false);
    };

    fetchImages();
  }, [sortOrder, refreshKey, columns]);

  // Infinite scroll handler
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && visibleCount < images.length) {
        setVisibleCount((prev) => Math.min(prev + imagesPerLoad, images.length));
      }
    },
    [visibleCount, images.length, imagesPerLoad]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "200px", threshold: 0 };
    // ↑ rootMargin helps load earlier on small screens
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [handleObserver]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="my-4">
      {/* Header with Filters */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="mb-4 d-flex align-items-center gap-2">
          <FaImages className="me-2 text-primary" /> Our Gallery
        </h2>

        <div className="d-flex flex-wrap gap-2">
          <ButtonGroup>
            {/* Sort Button */}
            <Button
              variant={sortOrder === "desc" ? "outline-primary" : "outline-secondary"}
              size="sm"
              title={sortOrder === "desc" ? "Newest First" : "Oldest First"}
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            >
              {sortOrder === "desc" ? <FaSortAmountDown /> : <FaSortAmountUp />}
            </Button>

            {/* Grid Buttons */}
            <div className="d-sm-none">
              <Button
                variant={columns === 1 ? "primary" : "outline-secondary"}
                size="sm"
                title="1 per row (mobile)"
                onClick={() => setColumns(1)}
              >
                <FaSquare />
              </Button>
            </div>

            <Button
              variant={columns === 3 ? "primary" : "outline-secondary"}
              size="sm"
              title="3 per row"
              onClick={() => setColumns(3)}
            >
              <FaThLarge />
            </Button>
            <Button
              variant={columns === 4 ? "primary" : "outline-secondary"}
              size="sm"
              title="4 per row"
              onClick={() => setColumns(4)}
            >
              <FaTh />
            </Button>
            <Button
              variant={columns === 6 ? "primary" : "outline-secondary"}
              size="sm"
              title="6 per row"
              onClick={() => setColumns(6)}
            >
              <FaGripHorizontal />
            </Button>

            {/* Refresh Button */}
            <Button
              variant="outline-secondary"
              size="sm"
              title="Refresh"
              onClick={() => setRefreshKey((k) => k + 1)}
            >
              <FaSyncAlt />
            </Button>
          </ButtonGroup>

        </div>
      </div>

      {/* Gallery Grid using CSS Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "1rem",
          alignItems: "stretch",
        }}
      >
        {images.slice(0, visibleCount).map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-100 shadow-sm border-0 rounded-3 d-flex flex-column">
              <div className="ratio ratio-16x9">
                <Card.Img
                  src={img.imageUrl}
                  alt={img.title || "Gallery Image"}
                  className="rounded-top"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-semibold">{img.title}</Card.Title>
                <Card.Text className="text-muted small flex-grow-1">{img.description}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Intersection observer target */}
      <div ref={observerRef} className="text-center mt-4">
        {visibleCount < images.length && <Spinner animation="border" />}
        {visibleCount >= images.length && <p className="text-muted">No more images</p>}
      </div>
    </Container>
  );
}

export default Gallery;
