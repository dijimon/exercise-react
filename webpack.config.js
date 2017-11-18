const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    module: {},
    context: path.resolve(__dirname, './src'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './app.js',
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['es2015', 'react', 'stage-0']},
                    },
                ],
            },
            {
                test: /(\.css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: 'src',
    hot: true,
    publicPath: '/',
    stats: {
        colors: true,
    },
});

module.exports = config;
