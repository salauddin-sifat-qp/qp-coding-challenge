const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the port of your frontend
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Hello universe!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
