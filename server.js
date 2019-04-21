const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
let count = 0;

const insertData = function(req, res) {
  count++;
  res.send("" + count);
};

const getData = function(req, res) {
  res.send("" + count);
};

app.use(express.static(__dirname + "/join_us_client/build/"));
app.get(/\/join_us\/*/, insertData);
app.get("/hello", getData);

app.listen(port, () =>
  console.log("Express server is running on localhost:", port)
);
