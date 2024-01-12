require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();

const mongoConnect = require("./util/database");

mongoConnect((client) => {
  console.log(client);
  app.listen(PORT, () => {
    console.log(`Server Started On PORT ${PORT}`);
  });
});
