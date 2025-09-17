import React from "react";
import { formatDateToReadable, trimQuotes } from "../utils/strings";
function Notice({ list }) {
  return (
    <div className="row g-3">
      {list.length === 0 && (
        <div className="text-center text-muted py-4">No notices found.</div>
      )}
      {list.map(({ datePublished, title, description, lastDate }, i) => (
        <div className="col-12 news-card-full" key={i}>
          <div className="notice-card p-3 bg-white shadow-sm rounded-3 border-start border-4 border-primary position-relative h-100 d-flex flex-column">
            <div className="d-flex align-items-center mb-1">
              <span className="badge bg-primary me-2">
                {formatDateToReadable(trimQuotes(datePublished))}
              </span>
              <h5 className="fw-semibold mb-0 text-primary flex-grow-1">{trimQuotes(title)}</h5>
            </div>
            <p
              className="mb-2 text-secondary small"
              style={{ whiteSpace: "pre-line" }}
            >
              {trimQuotes(description)}
            </p>
            {lastDate && (
              <div className="d-flex justify-content-end">
                <span className="badge bg-warning text-dark">
                  Last Date: {formatDateToReadable(trimQuotes(lastDate))}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notice;