const express = require("express");
const app = express();
app.listen(3000, (error, result) => {
  if (error) {
    console.log(error, "error occured");
  } else {
    console.log("server started at port 3000");
  }
});
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://PiyushDubey32:piyushdubey0341@cluster0.k6djgk9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (error, result) => {
    if (error) {
      console.log("database could not connected");
    }
    if (result) {
      console.log("database connected successfully");
    }
  }
);

let data = {
  firstName: "piyush",
  lastName: "dubey",
  technology: "AWS",
  email: "piyushnit77@gmail.com",
  password: "Dubey@03412532",
};
app.get("/get/test", (req, res) => {
  return res.json({ message: "this is my message", data });
});
