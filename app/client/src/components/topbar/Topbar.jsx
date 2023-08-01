import "./Topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"
import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import "./Topbar.css"

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const URL = "https://blog-app-wvlc.onrender.com/api/images/"
  const PF = URL;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link to="https://blog-app-wvlc.onrender.com/settings">
              {user.profilePic ? (
                <img
                  className="topImg"
                  src={PF + user.profilePic}
                  alt="img not found"
                />
              ) : (
                <PersonIcon className="noUserIcon" />
              )}
            </Link>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
