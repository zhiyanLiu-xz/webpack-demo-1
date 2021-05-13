const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'My App',
    template: 'src/assets/index.html'
  })
],
module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'file-loader',
      },
      {
        test: /\.styl$/,//以.开头，l结束，$是结束的意思
        loader: [
          // compiles Styl to CSS
          "style-loader",
          "css-loader",
          "stylus-loader",
        ], 
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
              loader: "sass-loader",
              options: {
                  implementation: require('dart-sass')
                }
          },
        ],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
};