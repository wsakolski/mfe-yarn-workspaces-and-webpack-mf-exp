const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3002, // Change per app
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: path.join(__dirname, "dist"),
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/Widget",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
        shared: { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
