const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = ["http://localhost:3200", "http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Backend!" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
