module.exports = {
  entry: [
    './js/main.js'
  ],
  output: {
    path: __dirname + "/dist/js",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },


};
