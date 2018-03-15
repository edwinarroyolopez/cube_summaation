var express  = require("express"),
app      = express(),
http     = require("http"),
server   = http.createServer(app),
bodyParser  = require("body-parser"),
methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
// Add headers
app.use(function (req, res, next) {
// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
// Pass to next layer of middleware
    next();
});
var router = express.Router();

/*
  router.get('/api/query', function(req, res) {
  res.send({"aaa":"asdasd!"});
});
*/
router.post('/api/query', function(req, res) {


                  let cubes = JSON.parse(req.param('cubes'));

                       start_cube =req.param('start_cube');
                       final_cube = req.param('final_cube');

                      let sum = 0;

                       for(let i = (start_cube-1); i < final_cube;i++){
                                sum = sum + cubes[i].value;/* sum values */
                                console.log(' cube: '+i+' sum: '+sum);
                       }

                  res.send({sum:sum});
});


router.post('/api/update', function(req, res) {

         let cubes = JSON.parse(req.param('cubes'));
         let number_cube = req.param('cube');
         let value = req.param('value');


            let cube =  cubes.find(function(cube){
                   return cube.number_cube === number_cube
             });

           /* Update value  */
                 cube.value = value;

           /* update cubes */
               //cubes.splice(number_cube, 1);/* delete cube */
               cubes.splice((number_cube-1), 1,cube); /* inserta */

         cubes = JSON.stringify(cubes);

          console.log('Cubes...'+ cubes );
          console.log('Cube...' + JSON.stringify(cube) );
          console.log('Value...' + value);



          res.send({"cubes":cubes,"cube":JSON.stringify(cube)});
});


app.use(router);


app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
