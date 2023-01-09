const express = require("express");
const cors = require("cors");

//express app
const app = express();

//global middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sample routes
app.get("/user", (req, res) => {
  res.status(200).json({
    name: "Tarun",
    age: 20,
    gender: "male",
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
