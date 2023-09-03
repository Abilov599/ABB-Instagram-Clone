import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsData } from "../../redux/slice/postsSlice";

function PostList() {
  const dispatch = useDispatch();
  const { data: posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    // Dispatch the async action to fetch posts data when the component mounts
    dispatch(fetchPostsData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}

export default PostList;
