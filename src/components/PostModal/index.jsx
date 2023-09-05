import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./style.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import OutlinedInput from '@mui/material/OutlinedInput';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 1,
  display: "flex",
  flexDirection: "row",
};

const leftSideStyle = {
  // flex: 1,
  paddingRight: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const rightSideStyle = {
  // flex: 1,
  // paddingLeft: "1rem",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={leftSideStyle}>
            <img
              src="https://via.placeholder.com/500"
              alt="Image"
              style={{ AspectRatio: "1/1", maxWidth: "100%", display: "block" }}
            />
          </div>
          <div style={rightSideStyle} className="right">
            <div className="right__top">
              <div className="right__top-left">
                <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40" />
                <Typography variant="subtitle1">username</Typography>
              </div>
              <div className="right__top-right">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="right__comment">
              <div className="right__comment-left">
                <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40" />
                <Typography variant="subtitle1">comments 1</Typography>
              </div>
              <div className="right__comment-left">
                <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40" />
                <Typography variant="subtitle1">comments 1</Typography>
              </div>
              <div className="right__comment-left">
                <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40" />
                <Typography variant="subtitle1">comments 1</Typography>
              </div>
            </div>
            <div className="right__info">
              <div className="right__icons">
                <div className="right__icons-left">
                  <FavoriteBorderIcon />
                  <ChatBubbleOutlineIcon />
                  <PresentToAllIcon />
                </div>
                <div className="right__icons-right">
                  <BookmarkBorderIcon />
                </div>
              </div>
              <div className="right__date">
                <img src="https://via.placeholder.com/30" alt="user" />
                <Typography variant="subtitle1">The number of likes</Typography>
              </div>
              <div className="right__time">
                <span>{new Date().toString()}</span>
              </div>
            </div>
            <div className="right__addcomment">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="add comment.." />
                <Button>Send</Button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
