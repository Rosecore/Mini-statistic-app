import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack' 

module.exports  = {
    entry: './src/index.tsx',
    mode:"development",
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [__dirname, 'src', 'node_modules'],
      mainFiles: ["index"]
      },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'src', 'index.tsx'),
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:  path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin,
    ],
    devtool: 'inline-source-map',
    devServer: {
      port:3000,
      open: true,
      historyApiFallback: true,
      hot: true},
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },

  };