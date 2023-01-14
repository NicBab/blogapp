import "./Header.css";
import green_texture from "../../assets/images/green_texture.jpg"
import "./Header.css"

const Header = () => {

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={green_texture}
        alt="green_texture"
      />
    </div>
  );
};

export default Header;
