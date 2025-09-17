import React, { useEffect, useState } from "react";
import { NEWS_AND_NOTICES_SHEET_ID as SHEET_ID } from '../constants';
import Notice from "../components/Notice";
import Papa from "papaparse";

function parseCSV(text) {
  const { data } = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });
  // Ensure all fields exist
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
  // Only show if published date is today or earlier
  return published.setHours(0,0,0,0) <= today.setHours(0,0,0,0);
}

function isPast(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const d = new Date(dateStr);
  // If lastDate is before today (ignoring time), it's past
  return d.setHours(0,0,0,0) < today.setHours(0,0,0,0);
}

const NewsAndNotices = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);

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
    return <div className="text-center py-5">Loading news...</div>;
  }

const publishedNews = news.filter(item => isPublished(item.datePublished));
const latest = publishedNews.filter(item => !isPast(item.lastDate));
const past = publishedNews.filter(item => isPast(item.lastDate));



  return (
    <section className="py-5 bg-light" id="news-and-notices">
      <div className="container">
        <h2 className="mb-4">
          📰 News & Notices
        </h2>
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn btn-outline-primary me-2 ${!showPast ? 'active' : ''}`}
            onClick={() => setShowPast(false)}
          >
            Latest Notices
          </button>
          <button
            className={`btn btn-outline-secondary ${showPast ? 'active' : ''}`}
            onClick={() => setShowPast(true)}
          >
            Past Notices
          </button>
        </div>
        {showPast ? <Notice list={past} /> : <Notice list={latest} />}
      </div>
    </section>
  );
};

export default NewsAndNotices;