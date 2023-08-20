import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const URL = "https://blog-app-wvlc.onrender.com/images/";
   
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={URL + post.photo} alt={`${post._id}`} />
      )}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <div className="postCats">
          <span className="postCat">{post.categories}</span>
        </div>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
