import "./Post.css";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const PF = "https://blog-app-wvlc.onrender.com/images/"
   

  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt={`${post._id}`} />
      )}
      <div className="postInfo">
        <Link to={`https://blog-app-wvlc.onrender.com/post/${post._id}`} className="link">
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
