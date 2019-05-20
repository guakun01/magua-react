const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    magua: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'magua',
      template: 'index.html',
    })
  ]
}