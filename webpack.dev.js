const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    overlay: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      files: "src/**/*.(js|jsx|ts|tsx)",
      extensions: [".js", ".jsx"],
      overrideConfigFile: ".eslintrc",
      lintDirtyModulesOnly: true,
      emitError: true,
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
    new ErrorOverlayPlugin(),
  ],
});
