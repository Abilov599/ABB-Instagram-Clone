import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserFeedData } from '../../redux/slice/userFeedSlice';

import './PostColumn.scss'
const PostColumn = () => {
  const dispatch = useDispatch();
  const { data: userFeed, loading, error } = useSelector((state) => state.userFeed);

  const [hoveredPost, setHoveredPost] = useState(null);

  useEffect(() => {
    dispatch(fetchUserFeedData());
  }, [dispatch]);

  const handlePostHover = (post) => {
    setHoveredPost(post);
  };

  const handleMouseLeave = () => {
    setHoveredPost(null);
  };

  return (
    loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : (
      <div className="post-grid">
        {userFeed.map((post) => (
          <div
            key={post.id}
            className="post-item"
            onMouseEnter={() => handlePostHover(post)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={post.imageUrl} alt={post.caption} className="post-image" />
            {hoveredPost && hoveredPost.id === post.id && (
              <div className="post-info-overlay">
                <div><i className="fa-regular fa-xl fa-heart">&nbsp;</i>{post.likes.length}</div>
            <div><i className="fa-regular fa-xl fa-comment">&nbsp;</i>{post.comments.length}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  );
};

export default PostColumn;