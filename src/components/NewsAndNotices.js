import React, { useEffect, useState } from "react";
import Notice from "../components/Notice";
import Papa from "papaparse";
import { Container, Spinner } from "react-bootstrap";
import { FaNewspaper, FaBullhorn, FaHistory } from "react-icons/fa";

function parseCSV(text) {
  const { data } = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });
  return data.map(row => ({
    datePublished: row["Date Published"] || "",
    title: row["Title"] || "",
    description: row["Description"] || "",
    lastDate: row["Last Date"] || "",
  }));
}

function isPublished(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const published = new Date(dateStr);
  return published.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
}

function isPast(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const d = new Date(dateStr);
  return d.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
}

const NewsAndNotices = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);

  const SHEET_ID = process.env.REACT_APP_NEWS_AND_NOTICES_SHEET_ID;
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const items = parseCSV(text);
        setNews(items);
      } catch (err) {
        console.error("Error loading sheet:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [SHEET_URL]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const publishedNews = news.filter(item => isPublished(item.datePublished));
  const latest = publishedNews.filter(item => !isPast(item.lastDate));
  const past = publishedNews.filter(item => isPast(item.lastDate));

  return (
    <Container className="my-4">
      <h2 className="mb-4 d-flex align-items-center gap-2">
        <FaNewspaper className="text-primary" /> News & Notices
      </h2>
      <div className="d-flex justify-content-center mb-4 gap-2">
        <button
          className={`btn btn-outline-primary d-flex align-items-center gap-2 ${!showPast ? "active" : ""}`}
          onClick={() => setShowPast(false)}
        >
          <FaBullhorn /> Latest Notices
        </button>
        <button
          className={`btn btn-outline-secondary d-flex align-items-center gap-2 ${showPast ? "active" : ""}`}
          onClick={() => setShowPast(true)}
        >
          <FaHistory /> Past Notices
        </button>
      </div>
      {showPast ? <Notice list={past} /> : <Notice list={latest} />}
    </Container>
  );
};

export default NewsAndNotices;
