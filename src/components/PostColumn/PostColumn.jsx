import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserFeedData } from "../../redux/slice/userFeedSlice";

const PostColumn = () => {
  const dispatch = useDispatch();
  const { data: userFeed, loading, error} = useSelector((state) => state.userFeed);

  useEffect(() => {
    dispatch(fetchUserFeedData());
  }, [dispatch]);

  return ( 
    loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : (
      <div className="post-grid">
        {userFeed.map((post) => (
          <div key={post.id} className="post-item">
            <img src={post.imageUrl} alt={post.caption} className="post-image" />
          </div>
        ))}
      </div>
    )
  );
}

export default PostColumn;
