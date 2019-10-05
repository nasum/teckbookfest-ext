const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    background: "./src/background.ts",
    popup: "./src/popup.ts",
    content_scripts: "./src/content_scripts.ts"
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [".ts", ".vue"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        loader: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] }
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: "src/manifest.json",
        to: "manifest.json"
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      chunks: ['popup'],
      template: 'src/popup.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}