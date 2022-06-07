const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: "./src/index.tsx",
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".css", ".scss", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: "image-webpack-loader",
            },

            "url-loader?limit=100000",
          ],
          // type: 'asset/inline'
        },
        {
          test: /\.(css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].css",
                outputPath: "css",
                esModule: false,
              },
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: { auto: true },
              },
            },
            {
              loader: "sass-loader",
              options: {
                webpackImporter: true,
              },
            },
          ],
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
 new MiniCssExtractPlugin({
        linkType: "text/css",
      }),
    ],
    devServer: {
      open: true,
    },
  };
};