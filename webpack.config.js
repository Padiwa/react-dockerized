const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "main.js",
    path:path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
        ],
    },
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx",".css"],
  },
}