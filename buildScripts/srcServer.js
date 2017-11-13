import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

//setup webpack for express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo : true,
  publicPath : config.output.publicPath
}));

/*eslint-disable no-console*/
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'/../src/index.html'));
});

//get users
app.get('/users', function(req, res){
   res.json([
          {id: 1, 'firstName': 'bob', lastName: 'smith', email : 'bob@gmail.com'},
          {id: 1, 'firstName': 'tammy', lastName: 'norton', email : 'norton@gmail.com'},
          {id: 1, 'firstName': 'tina', lastName: 'lee', email : 'lee@gmail.com'}          
      ]);
});

//start server
app.listen(port, function(err){
   if(err){
    console.log(err);
   }
   else{
    open('http://localhost:'+port);
   }
});
