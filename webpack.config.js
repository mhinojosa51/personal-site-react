module.exports = {
  entry: __dirname + '/app/components/index.js',
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
	watch : true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
			{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
  }
};
