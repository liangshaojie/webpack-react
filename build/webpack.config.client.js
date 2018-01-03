const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require("webpack-merge")
const baseConfig = require("./webpack.base")
const isDev = process.env.NODE_ENV === 'development'


const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    }),
    new HTMLPlugin({
      template: '!!ejs-compiled-loader!' + path.join(__dirname, '../client/server.template.ejs'),
      filename: 'server.ejs'
    })
  ]
})

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '127.0.0.1',
    port: '1234',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      error: true,
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      '/api': 'http://127.0.0.1:2234'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}


module.exports = config
