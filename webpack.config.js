const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    background: "./src/background.ts"
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: "src/manifest.json",
        to: "manifest.json"
      },
      {
        from: "src/popup.html",
        to: "popup.html"
      }
    ]),
    new CleanWebpackPlugin(),
  ]
}