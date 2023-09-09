import React from "react";
import Modal from "react-modal";
import {BsThreeDots} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {GoShare} from "react-icons/go";
import {BsBookmark} from "react-icons/bs";
import { format } from 'date-fns';
import profile from "../../assets/profile.jpg"

import "./style.scss";

const ShowPostModal = ({ postModal, setPostModal, currentPost }) => {
    const date = new Date('2019-07-20');

    const formattedDate = format(date, 'dd MMMM yyyy');

  return (
    <Modal
      isOpen={postModal}
      ariaHideApp={false}
      className="showPostModal"
      contentLabel="view post"
      onRequestClose={() => setPostModal(false)}
    >
      <div className="modal">
        <div className="modal__left">
          {currentPost && (
            <img src={currentPost.imageUrl} alt={currentPost.caption} />
          )}
        </div>
        <div className="right">
          <div className="right__top">
            <div className="right__top-left">
              <img alt="username" src={profile} />
              <h4>{currentPost?.authorUsername}</h4>
            </div>
            <div className="right__top-right">
              <BsThreeDots />
            </div>
          </div>
          <div className="right__comment">
            {currentPost?.comments?.map((comment) => (
              <div className="right__comment-left" key={comment.commentId}>
                <img alt="username" src={profile} />
                <h5>{comment.authorUsername}</h5>
                <p>{comment.text}</p>
              </div>
            ))}
            {currentPost?.comments.length === 0 && <p>There is no comment</p>}
          </div>
          <div className="right__info">
            <div className="right__icons">
              <div className="right__icons-left">
                <AiOutlineHeart />
                <FaRegComment />
                <GoShare />
              </div>
              <div className="right__icons-right">
                <BsBookmark />
              </div>
            </div>
            <div className="right__date">
              <img src={profile} alt="user" />
              <p>liked by <span className="author">{currentPost?.authorUsername}</span> and {currentPost?.likes.length} people</p>
            </div>
            <div className="right__time">
              <span className="date">{formattedDate}</span>
            </div>
          </div>
          <div className="right__addcomment">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="add comment.." />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShowPostModal;
