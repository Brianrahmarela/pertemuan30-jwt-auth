const express = require("express");
const cors = require("cors");
const app = express();
const {PORT, dbConfigMongo} = require('./config')
const localPort = process.env.PORT || 3000;

//contoller
const router = require('./routes')
console.log("ini port", localPort)
// console.log("db mongo port", dbConfigMongo)
app.use(cors())
// app.options('*', cors())
app.use(express.json())
// app.use(routes)

app.get("/", (req, res) => {
  res.send("halo");
});

app.use(router)

if (dbConfigMongo) {
  app.listen(localPort, () => {
    console.log("tes jalan", PORT);
  });
} else {
  console.log("error");
}