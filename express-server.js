const express = require('express');

const app = express();
const port = 1234;

app.get("/info", (req, res) => {
  res.send("This is the Info page");
});

app.get("/home", (req, res) => {
  res.send("This is the Home page");
});

app.get('*', (req, res) => {
  // res.status(404);
  res.statusCode = 404;
  res.send('Page not Found:');
  return;

  // res.status(404).send('Page not Found');
});

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});