var express = require('express'),
    app     = express();


app.get('/', function(req, res){
  res.send('Tom Hung');
});

app.listen(3000);
console.log('Server is listening on port:3000');