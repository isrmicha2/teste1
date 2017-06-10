const express = require('express')
const app = express();

app.get('/inserir/:id/:nome', function(req, res){
	res.send("inserir/" +req.params.id + "/" + req.params.nome);
});

app.get('/hello', function(req, res){
	res.send("Hello World!");
});

app.get('/', function (req, res) {
  res.send('Root!');
})

app.get('*', function (req, res) {
  res.send('ERROR!');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})