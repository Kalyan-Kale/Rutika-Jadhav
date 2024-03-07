const express = require("express");
require("dotenv").config();
const passport = require('./auth/auth');

const dbConnect = require("./config/database");
const appointmentRoutes = require("./routes/allRoutes");

const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body

/* `app.use(cors({ origin: "*" }))` is enabling Cross-Origin Resource Sharing (CORS) for all routes in
the Express application. CORS is a security feature implemented in web browsers that restricts web
pages from making requests to a different domain than the one that served the web page. By setting
the `origin` property to `"*"`, the server is allowing requests from any domain. This is useful
during development, but in production, it is recommended to set the `origin` property to the
specific domain(s) that are allowed to make requests to the server. */
app.use(
  cors({
    origin: "*",
  })
);
// Middleware Function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.use(express.json());

/* `app.use("/api/v1", userRoutes);` is mounting the `userRoutes` middleware on the `/api/v1` route.
This means that any request that starts with `/api/v1` will be handled by the `userRoutes`
middleware. For example, if there is a `GET` request to `/api/v1/users`, it will be handled by the
`userRoutes` middleware. */
app.use("/api/v1", appointmentRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
