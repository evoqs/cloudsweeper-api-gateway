const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const path = require("path");
const express = require('express')
const mongoose = require('mongoose');  
const cors = require("cors");

dotenv.config();

var corsOptions = {
  origin: "*"
};

const db = require("./models");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,'views')))

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 8080;

app.get("/", function (req, res) {
  res.send("test endpoint")
})
require("./routes/user")(app);
require("./routes/auth")(app);
require("./routes/gateway")(app)

db.mongoose
.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
}); 
