const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD),
  () => console.log("DB is connected")
);

app.listen((PORT = process.env.PORT), (URL = process.env.SERVER_URL), () => {
  console.log(`Server is running on ${URL}:${PORT}`);
});
