import React from "react";
import "./quote.css";

export default function Quote({ quote, author }) {
  return (
    <div>
      <div className="quote-wrapper">
        <blockquote className="text">
          <p>{quote}</p>
          <footer>– {author}</footer>
        </blockquote>
      </div>
    </div>
  );
}
