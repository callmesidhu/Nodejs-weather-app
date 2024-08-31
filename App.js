const express = require("express");
const app = express();
const {API_KEY} = require('./config.js')
const axios = require('axios')

app.set("view engine", "ejs");


app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});


app.get("/weather", async(req, res) => {

  const city = req.query.city;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&unites=imperial&appid=${API_KEY}`;
  let weather ;
  let error = null;

  try{
    const response = await axios.get(API_URL)
    weather = response.data;
    console.log(weather)
  }catch(error){
    weather = null;
    error = "Error , please try again"
    console.log(error)
  }


  res.render("index", { weather, error });
});


const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
