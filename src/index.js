// filepath: /Users/timothystout/Desktop/HooHack25/webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Ensure this path is correct
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
};
