const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: ['./scripts/app.js', './styles/app.scss'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // compile all .scss files to plain old css
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'sass-loader'],
      },
      // create sprite sheet from svgs
      {
        test: /assets\/svgs\/.*\.svg$/, // your icons directory
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: './app.svg', // this is the destination of your sprite sheet
        },
      }
    ],
  },
  plugins: [
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: './app.css',
    }),
    // create svg spritesheet
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
  optimization: {
    minimizer: [
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};