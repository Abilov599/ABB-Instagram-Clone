import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import pp from "../../assets/pp.jpg"
import { subscribeToUser, unsubscribeFromUser } from '../../redux/slice/userFeedSlice';
import { fetchUserFeedData } from '../../redux/slice/userFeedSlice';
import "./PersonProfile.scss"

const PersonProfile = () => {
  const dispatch = useDispatch();
  const isSubscribed = useSelector((state) => state.userFeed.isSubscribed);
  const followers = useSelector((state) => state.userFeed.followers);
  const user = useSelector((state)=>state.userFeed.data)

  useEffect(() => {
    dispatch(fetchUserFeedData());
  }, [dispatch]);

 
  const handleSubscription = () => {
    if (isSubscribed) {
      dispatch(unsubscribeFromUser());
    } else {
      dispatch(subscribeToUser());
    }
  };

  return (
    <div className="header-user">
      <div className="profile-info">
        <div className="profile-photo">
          <img src={pp} alt="pp" />
        </div>
        <div className="profile-details">
          <h1>@{}</h1>
          <button className='subscribe-button' onClick={handleSubscription}>
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
          <div className="dt">
          <div className="followers">
            <span>Followers: </span>
            <span>{followers}</span>
          </div>
          <div className="followers" id="fv">
            <span>Followings: </span>
            <span>100</span>
          </div>
          <div className="followers" id="fv">
            <span>Post: </span>
            <span>{user.length}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonProfile;
