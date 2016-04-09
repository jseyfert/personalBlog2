var express = require('express');
// var bodyParser = require('body-parser');
var path = require('path');
var app = express();


var spotifyRoute = require('./routes/spotify');
app.use('/spotify', spotifyRoute);

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/', function(req, res) {
  console.log("SpotifyWebApi");
  res.sendFile(path.join(__dirname, 'index.html'));
  // res.json({data: 'yes'});
});




var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("🔥 fired up 🔥 \n🔥 on " + port + " 🔥")
});