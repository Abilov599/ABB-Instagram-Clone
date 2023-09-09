import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserFeedData } from "../../redux/slice/userFeedSlice";
import "./PostColumn.scss";
import ShowPostModal from "../ShowPostModal";

const PostColumn = () => {
  const dispatch = useDispatch();
  const {
    data: userFeed,
    loading,
    error,
  } = useSelector((state) => state.userFeed);

  const token = useSelector((state) => state.token.token);

  const [hoveredPost, setHoveredPost] = useState(null);
  console.log(userFeed);


  const [postModal, setPostModal] = useState(false);
  const [currentPost,setCurrentPost] = useState(null)

  useEffect(() => {
    dispatch(fetchUserFeedData(token));
  }, [dispatch, token]);

  const handlePostHover = (post) => {
    setHoveredPost(post);
  };

  const handleMouseLeave = () => {
    setHoveredPost(null);
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : (
    <>
      <div className="post-grid">
        {userFeed.map((post, i) => (
          <div
            key={i}
            className="post-item"
            onMouseEnter={() => handlePostHover(post)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {setPostModal(true);setCurrentPost(post)}}
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="post-image"
            />
            {hoveredPost && hoveredPost.id === post.id && (
              <div className="post-info-overlay">
                <div>
                  <i className="fa-regular fa-xl fa-heart">&nbsp;</i>
                  {post.likes.length}
                </div>
                <div>
                  <i className="fa-regular fa-xl fa-comment">&nbsp;</i>
                  {post.comments.length}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <ShowPostModal 
        postModal={postModal}
        setPostModal={setPostModal}
        currentPost={currentPost}
      />
    </>
  );
};

export default PostColumn;
