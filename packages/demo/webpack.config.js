const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {
  default: createStyledComponentsTransformer,
} = require("typescript-plugin-styled-components");
const webpack = require("webpack");
const path = require("path");
const styledComponentsTransformer = createStyledComponentsTransformer();

const config = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    publicPath: "http://localhost:8000/",
    pathinfo: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
        ],
        include: path.resolve(process.cwd(), "src"),
        exclude: [/node_modules/, path.resolve(process.cwd(), "../**")],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = config;
