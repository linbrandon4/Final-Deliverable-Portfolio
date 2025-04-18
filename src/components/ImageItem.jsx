// components/ImageItem.jsx
import { useNavigate } from 'react-router-dom';

export default function ImageItem({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.internalRoute) {
      navigate(item.internalRoute);
    } else if (item.websiteURL) {
      window.open(item.websiteURL, '_blank');
    }
  };

  return (
    <img
      src={item.url}
      onClick={handleClick}
      style={{ cursor: 'pointer', width: 100 }}
      alt=""
    />
  );
}
