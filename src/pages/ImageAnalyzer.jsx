import { Link } from 'react-router-dom';

export default function ImageAnalyzer() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Image Analyzer</h1>
      <p>Write about how your project processes and analyzes images. What libraries were used?</p>
      <Link to="/">← Back to Portfolio</Link>
    </div>
  );
}
