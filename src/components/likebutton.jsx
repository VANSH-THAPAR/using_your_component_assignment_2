import { useState } from 'react';

function LikeButton({ isLiked }) {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button 
      className={`like-button ${liked ? 'liked' : ''}`} 
      onClick={toggleLike}
    >
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}

export default LikeButton;