// node
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3100",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);

// routes
const routes = require("./routes");
app.use("/api", routes);

// port
const port = process.env.PORT || 3000;

// start server
http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
