const path = require("path");

module.exports = {
  mode: "production",
  entry: "./build/index.js",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "index.js",
    publicPath: '',
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};