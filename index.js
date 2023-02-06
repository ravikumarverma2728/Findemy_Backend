const express = require("express");
const PORT = process.env.PORT || 9000;
const users = require("./routes/user");
const courses = require("./routes/course");
const cart = require("./routes/cart");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/users", users);
app.use("/courses", courses);
app.use("/carts", cart);

try {
  mongoose.connect(process.env.DB_LINK, () => console.log("Connected to DB!"));
} catch (error) {
  console.log(error);
}

app.listen(9000, () => {
  console.log(`Server started on port 9000`);
});
