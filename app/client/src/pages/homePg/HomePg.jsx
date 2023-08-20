import { Header, Sidebar, Posts } from "../../components/index/index.comp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config.js"
import "./HomePg.css"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchPosts = async ()=> {
    try {
      const res = await axiosInstance.get("/posts/" + search)
      setPosts(res.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [search]) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
