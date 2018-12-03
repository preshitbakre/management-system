 path = require('path');
 var webpack = require('webpack');
 var config = {

   entry: './index.js',

   output: {
      path:'/',
	  //path: __dirname + '/dist',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8000
   },


   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
		  {
  			test:/\.(s*)css$/,
  			use:['style-loader','css-loader', 'sass-loader']
		  },
		  {
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			loader: 'url-loader',
			options: {
			  limit: 10000
		   }
         }
      ]
   }
}

module.exports = config;
