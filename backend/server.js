const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//import routes
const user = require("./Routes/userRoutes");


const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors({
  origin: ["http://localhost:1234"],
}));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use Routes
app.use("/user",user);

//DB connection
const DB_URL =
  "mongodb+srv://minosh:minosh@cluster0.u1yxx.mongodb.net/AF_project?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});