const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg|jpg|jpeg|png|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
