const express = require("express");
const app = express();

app.set("view engine", "ejs");


app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});


app.get("/weather", (req, res) => {

  const city = req.query.city;


  res.render("index", { weather: null, error: null });
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
