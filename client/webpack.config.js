const path = require('path');

module.exports = {
  mode: 'development', // 'production' for production builds
  entry: './src/index.js', // Entry point of your app
  output: {
    filename: 'bundle.js', // The output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regex to match files to transpile
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env'], // Preset used for env setup
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/@mediapipe\/tasks-vision/, // Exclude the problematic module
      },
      // Add other rules for different file types
    ],
  },
  devtool: 'source-map', // Include source maps
  // Add plugins, devServer config, and other options here
};
