const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { resolve } = require('./../config/utils')

const webpackConfig = {
  mode: 'development',
  entry: resolve('src/main.js'),
  output: {
    filename: 'js/[name].[hash].js',
    path: resolve('dist')
  },
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 10024,
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
      minify: true,
      hash: false
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  }
}

module.exports = webpackConfig