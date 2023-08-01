// import { axiosInstance } from "../.././config"
import axios from "axios";
import { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const catDescending = [...cats].sort((a, b) => (a.name > b.name ? 1 : -1));

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://blog-app-wvlc.onrender.com/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="" src="" alt="" />
        <p></p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {catDescending.map((cat, idx) => (
            <div key={idx}>
              <Link to={`https://blog-app-wvlc.onrender.com/?cat=${cat.name}`} className="link">
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            </div>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
