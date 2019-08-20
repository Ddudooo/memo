const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
const outputDirectory = "dist";
 
module.exports = [{
  entry: {
    index : ['@babel/polyfill',"./src/client/index.js", "./src/client/index.css"],
  },
  output: {
    path: path.join(__dirname,outputDirectory),
    filename: '[name].[hash].js',
    publicPath: "/"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            "presets": ["@babel/preset-env","@babel/preset-react"],
            "plugins": ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        
        use: [
            MiniCssExtractPlugin.loader,
            // "style-loader",
            "css-loader"
        ]
      },
      {
        test:/\.(png|jpg)$/,
        loader:'file-loader',
        options:{
            name: '[path][name].[ext]',
        },
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 38080,
    open: true,
    proxy: {
      "*": {
        target:"http://localhost:3000"
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' })
  ]
}];
