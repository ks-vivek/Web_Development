// 1. Create a middleware function that logs each incoming request’s
// HTTP method, URL, and timestamp to the console.

import express from "express";
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log("Method is " + req.method);
    console.log("Host is " + req.hostname)
    console.log("route is " + req.url);
    console.log(new Date());
    next();
});

app.get('/', (req, res) => {
  res.status(200).send("Home route");
});

app.get('/about', (req, res) => {
  res.status(200).send("About route");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


