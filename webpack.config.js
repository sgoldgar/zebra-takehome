const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// terser removes console.logs
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = (env, argv) => ({
      context: __dirname + "/src",
      entry: './index.js',
      output: {
        filename: "bundle.js",
        path: __dirname + "/public",
        publicPath: '/'
      },
      resolve: {
        extensions: [".jsx", ".js", ".ts", ".tsx", ".ttf", ".otf"],
        modules: ['node_modules']
      },
      devServer: {
        hot: true,
        contentBase: __dirname + '/public',
        historyApiFallback: true,
        disableHostCheck: true,
        port: 8081,
        sockPort: 8081,
        watchOptions: {
          aggregateTimeout: 500, // delay before reloading
          poll: true // enable polling since fsevents are not supported in docker
        },
      },
      module: {
          rules: [
            // {
            //   test: /\.html$/i,
            //   loader: 'html-loader',
            // },
            {
              test: /\.less$/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: MiniCssExtractPlugin.loader,
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                    importLoaders: 2
                  },
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: true,
                    includePaths: [
                        path.resolve('../node_modules'),
                    ]
                  },
                },
              ],
            },
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
              test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/, 
              loader: "file-loader"
            },
            {
              test: /\.tsx?$/,
              use: 'babel-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i, 
              loader: "file-loader?name=/public/icons/[name].[ext]"
            }
          ],
        },
        plugins: [
            new Dotenv(),
            new HtmlWebpackPlugin({
              template:  __dirname + "/public/index.html",
            }),
            new MiniCssExtractPlugin({
              filename: 'styles.css',
              chunkFilename: '[id].css'
            }),
            new CompressionPlugin({
              test: /\.js$|\.css$/,
            }),
            new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
              },
              canPrint: true
            }),
            new PreloadWebpackPlugin()
        ],
        optimization: {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              extractComments: false,
              terserOptions: {
                output: {
                  comments: false
                },
                compress: {
                  drop_console: true
                }
              }
            }),
            new OptimizeCssAssetsPlugin({})
          ]
        },
        externals: {
          'jsdom': 'window',
          'cheerio': 'window',
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': 'window',
          'react/addons': true,
        }
});