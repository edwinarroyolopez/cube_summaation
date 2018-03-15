
import App from './app/src/app';

var express = require('express'),
      http = require('http'),
      path       = require('path'),
      cors = require('cors'),
      bodyParser, require('body-parser'),
      cons = require('consolidate'),
      app = express();

      var port = 8000;

      app.use(cors())
      //app.use(express.static('./public/'))
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: true }))



var server = http.createServer(app);

server.listen(port, function() {
   console.log("Listening on " + port);
});
