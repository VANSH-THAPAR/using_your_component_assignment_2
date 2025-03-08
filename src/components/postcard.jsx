import LikeButton from './likebutton';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={post.username} className="profile-image" />
      <div className="post-content">
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton isLiked={post.isLiked} />
      </div>
    </div>
  );
}

export default PostCard;