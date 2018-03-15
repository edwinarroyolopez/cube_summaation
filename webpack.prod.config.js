var webpack = require('webpack');
var path = require('path');

module.exports = {
   devtool: 'eval',
   entry: [
      './app/index.js'
   ],
   output: {
      publicPath: "http://localhost:8000/",
      path: path.join(__dirname, 'public'),
      filename: 'index.min.js'
   },
   module: {
      loaders: [{
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['react', 'es2015', 'stage-1']
         }
      }]
   },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
   plugins: [
      new webpack.DefinePlugin({
         "process.env": {
            NODE_ENV: JSON.stringify("development"),
            BROWSER: JSON.stringify(true)
         }
      })
   ]
}
