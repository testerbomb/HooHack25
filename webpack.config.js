const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "development", // Set to "production" for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Transpile modern JavaScript
        },
      },
    ],
  },
};
