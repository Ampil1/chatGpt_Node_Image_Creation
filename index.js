const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const path = require('path');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", async (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to Node world",
  });string = 'abcabc'
  unique_substrings(string)
});

app.post("/sayHi", async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.aksMe,
    });
    const result = completion.data.choices[0].text.replace(/\\"/g, '"');
    // res.status(200).json({
    //   status: 200,
    //   data: JSON.parse(result).replace(/\\"/g, '"')
    // });
    res.status(200).send({
      status: 200,
      data: result
  });
    // result.then().catch();
    console.log(result);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
});

app.post("/image", async (req, res) => {
  try {
    // let url = "https://api.openai.com/v1/images/generations";
    // const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: req.body.imageName,
      n: 2,
      size: "1024x1024",
    });
    
    const imageUrl = response.data.data[0].url;
    // console.log("mmmmmmmmm",imageUrl)
    if (response) {
      res.status(200).json({
        status: 200,
        data: imageUrl,
      });
    }
  } catch (e) {
    if (e.response) {
      console.log(e.response.status);
      console.log(e.response.data);
    } else {
      console.log(e.message);
    }
  }
});
app.listen(4040, (req, res) => {
  console.log("node server is up...");
});

// const result = new Promise()
