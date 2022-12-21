import "./Settings.css";
import { Link } from "react-router-dom"
import { Sidebar } from "../../components/index/index.comp";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:6001/images/";

  const handleUpdateAccount = async (e) => {
    dispatch({ type: "UPDATE_START" });
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error(err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.error(err);
    }
  };

  const deleteAccount = async (_id) => {
    window.alert(
      "Are you sure you want to delete this account? This action can not be undone"
    );
    try {
      const res = await axios.delete(`/users/${user._id}`);
      
      window.location.replace("/");
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">

        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle" onClick={deleteAccount}>DELETE ACCOUNT</span>
          <Link to="/" className="link">
            <span className="settingsCancelTitle">CANCEL</span>
          </Link> 
        </div>
     
        <form className="settingsForm" onSubmit={handleUpdateAccount}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user-gear"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated successfully!
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
