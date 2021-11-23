const express = require('express');

const app = express();
const port = 1234;

// middleware
app.use((req, res, next) => {
  console.log('incoming request:', req.method, req.url);
  // res.send('hello from the middleware');
  next();
});

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