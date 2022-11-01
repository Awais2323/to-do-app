const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();
const path = require('path');

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

app.use(express.static(path.resolve(__dirname, './front-end/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './front-end/build', 'index.html'));
});

require("./app/routes/spotify.routes")(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './front-end', 'index.js'));
});

// set port, listen for requests
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

