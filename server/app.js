const express = require("express");
const app = express();
var cors = require("cors");

const port = 5000;
const mongoose = require("mongoose");
const router = require("./routes/routes");

//Middlewares

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://dheerajd5:dheerajd5@cluster0.01awt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected.");
    app.listen(port, () => console.log(`App is listening on port:${port}`));
  })
  .catch((err) => {
    console.log("Couldn't connect.");
    console.log(err);
  });
