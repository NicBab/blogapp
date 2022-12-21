import { Header, Sidebar, Posts } from "../../components/index/index.comp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"

const Home = () => {


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
