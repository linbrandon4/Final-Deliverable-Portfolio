// src/pages/WebScraper.jsx
import { Link } from 'react-router-dom';

export default function WebScraper() {
  return (
    <div style={{ padding: '40px', color: 'white' }}>
      <h1>Web Scraper</h1>
      <p>This is a detailed description of your web scraping project.</p>
      <Link to="/" style={{ color: '#00f' }}>← Back to Portfolio</Link>
    </div>
  );
}
