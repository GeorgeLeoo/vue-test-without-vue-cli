const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

const webpackConfig = webpackMerge(webpackBaseConfig, {})

module.exports = webpackConfig