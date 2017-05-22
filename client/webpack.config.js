'use strict';
const webpack = require('webpack');
const fs = require('fs');
const path = __dirname.replace('client', '') + 'public/assets';

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'axios'],
  	app: './app.js'
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
  }
};