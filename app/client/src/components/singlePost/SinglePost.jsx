// import { axiosInstance } from "../.././config"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"
import "./SinglePost.css";
// import { URL } from "../.././App"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://blog-app-wvlc.onrender.com/images/";
  const { user, dispatch } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [category, setCategory] = useState([])

  const getPost = async () => {
    const res = await axios.get("/posts/" + path);
    setPost(res.data);
    setTitle(res.data.title);
    setDescription(res.data.description);
    setCategory(res.data.categories)
  };

  useEffect(() => {
    getPost()
  }, [path]) //eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        username: user._id,
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    dispatch({type: "UPDATE_START"})
    try {
      const res = await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      // window.location.reload()
      dispatch({type: "UPDATE_SUCCESS", payload: res.data})
      setUpdateMode(false);
    } catch (err) {
      console.error(err);
      dispatch({type: "UPDATE_FAILURE"})
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt={`${post._id}`} className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
          
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
           {category}
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            type="text"
            className="singlePostDescriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{post.description}</p>
        )}
        {updateMode && (
          <>
            <button className="updatePostButton" onClick={handleUpdate}>
              UPDATE
            </button>
            <button
              className="cancelButton"
              onClick={() => setUpdateMode(false)}
            >
              CANCEL
            </button>
          </>
        )}
      </div>
    </div>
  );
}

