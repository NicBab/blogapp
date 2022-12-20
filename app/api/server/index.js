const express = require("express");
const app = express();
const PORT = process.env.PORT || 6001;
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const authRoute = require("../routes/auth");

app.use(cors())
// app.use(cors({
//   origin: "https://localhost:3000"
// }));

// app.get('/', (req, res) => {
//   res.send('CORS solved')
// })

app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Success"))
  .catch(() => console.error("error connecting to DB"));


app.use("/api/auth", authRoute);

// app.use("/message", (req, res) => {
//   console.log("Hello from server")
// })

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
