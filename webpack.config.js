const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === 'development';

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (!isDevelopment) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
}

module.exports = {
  entry: {
    index: './src/index.js',
    details: './src/details.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
  },
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, './public/index.html'),
      excludeChunks: ['details'],
    }),
    new HtmlWebpackPlugin({
      filename: "details.html",
      template: path.resolve(__dirname, './public/details.html'),
      excludeChunks: ['index'],
    })
  ],
}