import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date(Date.now());
  const weekday = today.getDay();
  if (weekday >= 5) {
    res.render(__dirname + "/public/index.ejs", { dayText: "the weekend, it's time to have fun!" });
  } else {
    res.render(__dirname + "/public/index.ejs", { dayText: "a weekday, it's time do work hard!" });
  }
});


app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

