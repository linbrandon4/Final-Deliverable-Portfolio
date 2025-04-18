import { Link } from 'react-router-dom';

export default function MachineLearning() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Machine Learning Model</h1>
      <p>Discuss the model you built — algorithms, training data, and results.</p>
      <Link to="/">← Back to Portfolio</Link>
    </div>
  );
}
