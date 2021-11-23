const express = require('express');

const app = express();
const port = 1234;

app.get("/info", (req, res) => {
  res.send("This is the Info page")
});

app.get("/home", (req, res) => {
  res.send("This is the Home page")
});

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});