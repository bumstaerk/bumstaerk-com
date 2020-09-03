const express = require('express');

const app = express();

app.on('/',(req,res) => {
  res.json({
    "message":"Hello World!"
  })
});

app.listen(5000,() => {

});