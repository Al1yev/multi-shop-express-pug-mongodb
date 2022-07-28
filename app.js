const express = require("express");
const app = express();

app.use("/api/v1", (req, res, next) => res.send("Hellou"));

module.exports = app;
