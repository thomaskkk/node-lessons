import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import encrypt from "mongoose-encryption";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const secret = process.env.DB_CRYPT_SECRET;
userSchema.plugin(encrypt, {
  secret: secret,
  encryptedFields: ["password"],
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });

  newUser
    .save()
    .then(res.render("secrets.ejs"))
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ email: username })
    .then((foundUser) => {
      if (foundUser && foundUser.password === password) {
        res.render("secrets.ejs");
      } else {
        console.log("Invalid password");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});
