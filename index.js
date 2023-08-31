const express = require('express');
require('./config');
const AdminDetails = require('./admin');

const app = express();
app.use(express.json());


app.get("/search/:key", async (req, res) => {
  let data = await AdminDetails.find({
    $or: [
      { name: { $regex: req.params.key } },
      { username: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});




app.listen(5000);