'use strict';
const webpack = require('webpack');
const fs = require('fs');
const path = __dirname.replace('client', '') + 'public/assets';

module.exports = {
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  entry: {
    vendor: ['react', 'react-dom', 'react-apollo', 'axios', 'react-draft-wysiwyg', 'redux', 'react-redux'],
  	app: './src/app.js'
  },
  output: {
  	path: path,
    filename: '[name].js'
  },
  module: {
  	loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader?cacheDirectory=true' 
			}
		]
  },
		plugins: [
      new webpack.optimize.CommonsChunkPlugin({ 
        name: 'vendor', 
        filename: 'vendor.js', 
        minChunks: 2
      })
		]
};