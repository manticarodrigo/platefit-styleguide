// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: ['./styles/app.scss'],
  module: {
    rules: [
      // compile all .scss files to plain old css
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'sass-loader']
      },
    ],
  },
  plugins: [
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: './app.css'
    })
  ],
  optimization: {
    minimizer: [
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};