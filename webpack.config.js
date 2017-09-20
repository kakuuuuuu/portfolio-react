const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
   entry: './client/main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {

         loaders: [
              {
               test: /\.jsx?$/, // search for js files
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                        presets: ['es2015', 'react'] // use es2015 and react
                      }
              },
              {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css-loader")
              },
              {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
              },
              {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[hash].[ext]',
              },
},
      ]
   },
   plugins: [
     HtmlWebpackPluginConfig,
     new ExtractTextPlugin("styles.css"),
   ]
}
module.exports = config;
