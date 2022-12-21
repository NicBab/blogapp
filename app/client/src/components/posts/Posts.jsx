import "./Posts.css";
import { Post } from "../index/index.comp";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {[...posts].reverse().map((post, idx) => (
        <Post post={post} key={idx} />
      ))}
    </div>
  );
};

export default Posts;
