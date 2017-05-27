module.export = {
    entry: "./web/static/js/app.js",
    output: {
        path: "./priv/static/js",
        filename: "app.js"
    },
    module: {
    rules: [
        {
          test: /\.css$/,
          loader: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.less$/,
          loader: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
          query: {
            name: "fonts/[hash].[ext]",
            mimetype: "application/font-woff"
          }
        },
        {
          test: /\.(eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
          query: {
            name: "fonts/[hash].[ext]"
          }
        },
        {
          test: /\.(png)$/,
          loader: "file-loader",
          query: {
            name: "images/[hash].[ext]"
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        }
    ]
  },
    plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [
          ()=>require("autoprefixer"),
        ]
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
