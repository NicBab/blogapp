import "./Write.css";
import { useContext, useState } from "react";
// import { axiosInstance } from "../.././config"
import axios from "axios";
import { Context } from "../../context/Context"
import { Sidebar } from "../../components/index/index.comp";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [categories, setCategories] = useState([]);

  const [cats, setCats] = useState([]);
  const catDescending = [...cats].sort((a, b) => (a.name > b.name ? 1 : -1));

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://blog-app-wvlc.onrender.com/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      categories,
    };
    console.log(categories);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("https://blog-app-wvlc.onrender.com/upload", data);
      } catch (err) {
        console.error(err);
      }
    }
    try {
      const res = await axios.post("https://blog-app-wvlc.onrender.com/posts", newPost);
      window.location.replace("https://blog-app-wvlc.onrender.com/post/" + res.data._id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="write">
        <form className="writeForm">
          {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
          )}

          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <input
              className="writeInput"
              type="text"
              placeholder="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="writeCatGroup">
            <Box sx={{ minWidth: 120, width: 300 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categories}
                  label="Categories"
                  onChange={(e) => setCategories(e.target.value)}                
                >
                  {catDescending.map((cat, idx) => (
                    <MenuItem key={idx} value={cat.name}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="writeSubmit" type="submit" onClick={handleSubmit}>
            Publish
          </button>
        </form>
        <Sidebar />
      </div>
    </>
  );
};

export default Write;
