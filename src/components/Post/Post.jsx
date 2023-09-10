import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import profile from "../../assets/profile.jpg";

const Post = ({ post: currentPost }) => {
  return (
    <div
      className="post"
      style={{
        maxWidth: "600px",
        border: "1px solid #D3D3D3",
        borderRadius: "5px",
      }}
    >
      <div
        className="right__top"
        style={{ padding: "0 20px", height: "100px", border: "none" }}
      >
        <div className="right__top-left">
          <img
            width={"80px"}
            style={{ borderRadius: "50%" }}
            alt="username"
            src={profile}
          />
          <h4 style={{ fontSize: "20px" }}>{currentPost?.authorUsername}</h4>
        </div>
        <div className="top-right" style={{ marginTop: "30px" }}>
          <BsThreeDots size={"40px"} />
        </div>
      </div>
      <img
        style={{ width: "600px" }}
        src={currentPost.imageUrl}
        alt={currentPost.caption}
      />

      <div
        className="icons"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="icons-left" style={{ display: "flex", gap: "15px" }}>
          <AiOutlineHeart size={"40px"} />
          <FaRegComment size={"40px"} />
          <GoShare size={"40px"} />
        </div>
        <div className="icons-right" style={{ display: "flex" }}>
          <BsBookmark size={"40px"} />
        </div>
      </div>
    </div>
  );
};

export { Post };
