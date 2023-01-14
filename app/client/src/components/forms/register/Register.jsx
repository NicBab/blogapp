import { Link } from "react-router-dom";
// import { axiosInstance } from "../../.././config"
import axios from "axios"
import { useState, useContext } from "react";
import { Context } from "../../../context/Context"
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { dispatch } = useContext(Context)

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/")
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went Wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
