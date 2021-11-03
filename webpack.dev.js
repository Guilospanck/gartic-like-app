const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    watchContentBase: true,
    port: 3333
  },
  plugins: [
    new Dotenv({
      path: '.env.development'
    }),
    new HtmlWebpackPlugin({
      template: 'template.dev.html'
    })
  ]
})
