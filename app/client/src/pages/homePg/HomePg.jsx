import { Header, Sidebar, Posts } from "../../components/index/index.comp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { axiosInstance } from "../.././config"
import axios from "axios";
import "./HomePg.css"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts/" + search)
        setPosts(res.data)
        
      } catch (error) {
        console.error(error)
      }
    }
    fetchPosts()
  }, [search])

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
