const path = require("path");
const {HotModuleReplacementPlugin} = require("webpack")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == "development";
const IS_PROD = NODE_ENV == "production";
const GLOBAL_CSS_REGEXP = /\.global\s[ac]ss/

function setupDevtool () {
    if (IS_DEV) return "eval";
    if (IS_PROD) return false
}

module.exports = {
    resolve: {
        extensions: [".js", "jsx", ".tsx", ".ts", ".json"],
        alias: {
            "react-dom": IS_DEV ? "@hot-loader/react-dom": "react/dom",
        }
    },
    devServer: {
        watchOptions: {
            ignored: /dist/,
        },
        noInfo: true,
    },
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: [
        path.resolve(__dirname, "../src/client/index.jsx"),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
    ],
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "client.js",
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use:
                [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]==[hash:base64:5]",
                            }
                        }
                    },
                    "sass-loader",

                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
              test: GLOBAL_CSS_REGEXP,
              use: [
                "style-loader",
                "sass-loader"
              ]
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                    fallback: 'file-loader',
                    name: '[name].[ext]',
                    outputPath: 'images',
                  },
                },
              ],
            },
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: ['@svgr/webpack'],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV ?
    [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ] : [],
};
