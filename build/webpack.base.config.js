const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { resolve } = require('../config/utils')

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
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: resolve('node_modules')
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  }
}

module.exports = webpackConfig
