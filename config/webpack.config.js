// 一个常见的`webpack`配置文件
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
console.log('111111111', __dirname);
root = path.join(__dirname, '..');

module.exports = {
    mode: 'development',
    entry: root + "/src/index.js", //已多次提及的唯一入口文件
    output: {
        path: root + "/build",
        filename: "bundle-[hash].js"
    },
    devtool: 'eval-source-map',
    // devServer: {
    //     contentBase: "./public", //本地服务器所加载的页面所在的目录
    //     historyApiFallback: true, //不跳转
    //     inline: true,
    //     hot: true
    // },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    beautify: false,
                    compress: false,
                    comments: false,
                }
            })
        ]
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", '@babel/react'],
                    plugins: [
                        "@babel/plugin-transform-runtime"
                    ]
                }
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader",
            }, {
                loader: "css-loader",
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }, {
                loader: "postcss-loader"
            }],
        }, {
            test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
                limit: 10000, //1w字节以下大小的图片会自动转成base64
            },
        }
        ]
    },
    plugins: [
        new WebpackBar(),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: root + "/src/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin(['dist', 'build'], {
            root: path.resolve(root), // 根目录
            verbose: false,
            exclude: ['img']//不删除img静态资源
        })

        // new webpack.optimize.OccurrenceOrderPlugin(),

    ],
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(root, 'build'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 8080,
        open: true,
    }
}
