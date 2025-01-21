//
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// User routes
router.get("/users", (req, res) => {
  res.send([
    {
      name: "Ilias Shah",
      email: "ilias.shah@questionpro.cm",
      age: 32,
    },
    {
      name: "John Doe",
      email: "john.doe@questionpro.cm",
      age: 35,
    },
    {
      name: "Jane Doe",
      email: "jane.doe@questionpro.cm",
      age: 30,
    },
  ]);
});

module.exports = router;
