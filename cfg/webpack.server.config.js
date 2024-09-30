const path = require("path");
const nodeExternals = require("webpack-node-externals")
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\s[ac]ss/

module.exports = {
    resolve: {
        extensions: [".js", "jsx", ".tsx", ".ts", ".json"]
    },
    mode: NODE_ENV ? NODE_ENV : "development",
    target: "node",
    entry: path.resolve(__dirname, "../src/server/server.js"),
    output: {
        path: path.resolve(__dirname, "../dist/server"),
        filename: "server.js"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]==[hash:base64:5]",
                                exportOnlyLocals: true,
                            },
                        },
                    },
                    "sass-loader",

                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
              test: GLOBAL_CSS_REGEXP,
              use: ["sass-loader"]
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
    optimization: {
        minimize: false
    }
}
