const express = require ('express');
const app = express();
const volleyball = require('volleyball');


app.use(volleyball);

app.get('/', (req, res) => {
  res.send("Welcome");
});



app.listen(3000, () => {
  console.log("server listening")
});
