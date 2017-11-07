const express = require ('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');



var locals = {
title : 'An Example',
people : [
{name : 'Gandalf'},
{name : 'Frodo'},
{name : 'Hermione'}
]

}

nunjucks.configure('views',{ noCache: true })



app.use(volleyball);

app.get('/', (req, res) => {
  nunjucks.render('index.html',locals,
  function(err,renderedContent) {res.send(renderedContent)}
)
;
});




app.listen(3000, () => {
  console.log("server listening")
});
