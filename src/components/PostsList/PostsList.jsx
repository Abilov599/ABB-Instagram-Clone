import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFeedData } from "../../redux/slice/userFeedSlice";

function PostList() {
  const dispatch = useDispatch();
  // const { data: posts, loading, error } = useSelector((state) => state.posts);
  const {
    data: userFeed,
    loading,
    error,
  } = useSelector((state) => state.userFeed);

  useEffect(() => {
    // Dispatch the async action to fetch posts data when the component mounts
    dispatch(fetchUserFeedData());
  }, [dispatch]);

  console.log(userFeed);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ul></ul>;
}

export default PostList;
